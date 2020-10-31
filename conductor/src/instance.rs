/*!
Contains structs related to instances.

Each time you play a sound, it creates an "instance", or occurrence, of that sound.
Each instance can be controlled independently. Multiple instances of the same sound
can be playing at once.
*/

use crate::{
	parameter::Parameter,
	sequence::SequenceId,
	sound::{Sound, SoundId},
	stereo_sample::StereoSample,
	tween::Tween,
};
use std::{
	ops::Range,
	sync::atomic::{AtomicUsize, Ordering},
};

const MAX_SUB_INSTANCES: usize = 10;

static NEXT_INSTANCE_INDEX: AtomicUsize = AtomicUsize::new(0);

/**
A unique identifier for an `Instance`.

You cannot create this manually - an `InstanceId` is created
when you play a sound with an `AudioManager`.
*/
#[derive(Debug, Copy, Clone, Eq, PartialEq, Hash)]
pub struct InstanceId {
	index: usize,
}

impl InstanceId {
	pub(crate) fn new() -> Self {
		let index = NEXT_INSTANCE_INDEX.fetch_add(1, Ordering::Relaxed);
		Self { index }
	}
}

#[derive(Debug, Copy, Clone, Default)]
pub struct LoopSettings {
	pub start: Option<f64>,
	pub end: Option<f64>,
}

/// Settings for an instance.
#[derive(Debug, Copy, Clone)]
pub struct InstanceSettings {
	/// The volume of the instance.
	pub volume: f64,
	/// The pitch of the instance, as a factor of the original pitch.
	pub pitch: f64,
	/// Whether the instance should be played in reverse.
	pub reverse: bool,
	/// The position to start playing the instance at (in seconds).
	pub position: f64,
	/// Whether to fade in the instance from silence, and if so,
	/// how long the fade-in should last (in seconds).
	pub fade_in_duration: Option<f64>,
	pub loop_settings: Option<LoopSettings>,
}

impl Default for InstanceSettings {
	fn default() -> Self {
		Self {
			volume: 1.0,
			pitch: 1.0,
			reverse: false,
			position: 0.0,
			fade_in_duration: None,
			loop_settings: None,
		}
	}
}

struct SubInstance {
	position: f64,
	previous_position: f64,
}

impl SubInstance {
	fn new(position: f64) -> Self {
		Self {
			position,
			previous_position: position,
		}
	}
}

#[derive(PartialEq)]
pub(crate) enum InstanceState {
	Playing,
	Paused,
	Stopped,
	Resuming,
	Pausing,
	Stopping,
}

pub(crate) struct Instance {
	sound_id: SoundId,
	sequence_id: Option<SequenceId>,
	volume: Parameter,
	pitch: Parameter,
	reverse: bool,
	state: InstanceState,
	sub_instances: [Option<SubInstance>; MAX_SUB_INSTANCES],
	next_sub_instance_index: usize,
	fade_volume: Parameter,
	loop_region: Option<Range<f64>>,
}

impl Instance {
	pub fn new(
		sound_id: SoundId,
		sequence_id: Option<SequenceId>,
		settings: InstanceSettings,
	) -> Self {
		let state;
		let mut fade_volume;
		if let Some(duration) = settings.fade_in_duration {
			state = InstanceState::Resuming;
			fade_volume = Parameter::new(0.0);
			fade_volume.set(1.0, Some(Tween(duration)));
		} else {
			state = InstanceState::Playing;
			fade_volume = Parameter::new(1.0);
		}
		let mut sub_instances: [Option<SubInstance>; MAX_SUB_INSTANCES] = Default::default();
		sub_instances[0] = Some(SubInstance::new(settings.position));
		Self {
			sound_id,
			sequence_id,
			volume: Parameter::new(settings.volume),
			pitch: Parameter::new(settings.pitch),
			reverse: settings.reverse,
			state,
			sub_instances,
			next_sub_instance_index: 1 % MAX_SUB_INSTANCES,
			fade_volume,
			loop_region: match settings.loop_settings {
				Some(loop_settings) => Some(
					loop_settings.start.unwrap_or(0.0)
						..loop_settings.end.unwrap_or(
							sound_id
								.metadata()
								.semantic_duration
								.unwrap_or(sound_id.duration()),
						),
				),
				None => None,
			},
		}
	}

	pub fn sound_id(&self) -> SoundId {
		self.sound_id
	}

	pub fn sequence_id(&self) -> Option<SequenceId> {
		self.sequence_id
	}

	pub fn effective_volume(&self) -> f64 {
		self.volume.value() * self.fade_volume.value()
	}

	pub fn playing(&self) -> bool {
		match self.state {
			InstanceState::Playing => true,
			InstanceState::Paused => false,
			InstanceState::Stopped => false,
			InstanceState::Resuming => true,
			InstanceState::Pausing => true,
			InstanceState::Stopping => true,
		}
	}

	pub fn finished(&self) -> bool {
		self.state == InstanceState::Stopped
	}

	pub fn set_volume(&mut self, volume: f64, tween: Option<Tween>) {
		self.volume.set(volume, tween);
	}

	pub fn set_pitch(&mut self, pitch: f64, tween: Option<Tween>) {
		self.pitch.set(pitch, tween);
	}

	pub fn pause(&mut self, fade_tween: Option<Tween>) {
		if let Some(tween) = fade_tween {
			self.state = InstanceState::Pausing;
			self.fade_volume.set(0.0, Some(tween));
		} else {
			self.state = InstanceState::Paused;
		}
	}

	pub fn resume(&mut self, fade_tween: Option<Tween>) {
		if let Some(tween) = fade_tween {
			self.state = InstanceState::Resuming;
			self.fade_volume.set(1.0, Some(tween));
		} else {
			self.state = InstanceState::Playing;
		}
	}

	pub fn stop(&mut self, fade_tween: Option<Tween>) {
		if let Some(tween) = fade_tween {
			self.state = InstanceState::Stopping;
			self.fade_volume.set(0.0, Some(tween));
		} else {
			self.state = InstanceState::Stopped;
		}
	}

	pub fn update(&mut self, dt: f64) {
		if self.playing() {
			self.volume.update(dt);
			self.pitch.update(dt);
			// increment positions of existing sub-instances
			for sub_instance in &mut self.sub_instances {
				if let Some(sub_instance) = sub_instance {
					sub_instance.previous_position = sub_instance.position;
					sub_instance.position += self.pitch.value() * dt;
				}
			}
			// start new sub-instances if previous sub-instances reach the loop point
			if let Some(loop_region) = &self.loop_region {
				for i in 0..self.sub_instances.len() {
					let passed_loop_point = match &self.sub_instances[i] {
						Some(sub_instance) => {
							sub_instance.position >= loop_region.end
								&& sub_instance.previous_position < loop_region.end
						}
						None => false,
					};
					if passed_loop_point {
						self.sub_instances[self.next_sub_instance_index] =
							Some(SubInstance::new(loop_region.start));
						self.next_sub_instance_index += 1;
						self.next_sub_instance_index %= MAX_SUB_INSTANCES;
					}
				}
			}
			// remove finished sub-instances
			for sub_instance in &mut self.sub_instances {
				if let Some(instance) = sub_instance {
					if instance.position >= self.sound_id.duration() || instance.position < 0.0 {
						*sub_instance = None;
					}
				}
			}
			// if all sub-instances are finished, stop the instance
			if self.sub_instances.iter().all(|position| position.is_none()) {
				self.state = InstanceState::Stopped;
			}
		}
		let finished_fading = self.fade_volume.update(dt);
		if finished_fading {
			match self.state {
				InstanceState::Resuming => {
					self.state = InstanceState::Playing;
				}
				InstanceState::Pausing => {
					self.state = InstanceState::Paused;
				}
				InstanceState::Stopping => {
					self.state = InstanceState::Stopped;
				}
				_ => {}
			}
		}
	}

	pub fn get_sample(&self, sound: &Sound) -> StereoSample {
		let mut out = StereoSample::from_mono(0.0);
		for sub_instance in &self.sub_instances {
			if let Some(sub_instance) = sub_instance {
				if self.reverse {
					out += sound.get_sample_at_position(sound.duration() - sub_instance.position);
				} else {
					out += sound.get_sample_at_position(sub_instance.position);
				}
			}
		}
		out * (self.effective_volume() as f32)
	}
}
