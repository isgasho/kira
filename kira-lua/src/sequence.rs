use kira::sequence::{Sequence, SequenceId};
use mlua::prelude::*;

use crate::{
	duration::LDuration,
	event::CustomEvent,
	instance::{LInstanceId, LInstanceSettings},
	sound::LSoundId,
	tween::LTween,
	value::LValue,
};

#[derive(Debug, Clone)]
pub struct LSequenceId(pub SequenceId);

impl LuaUserData for LSequenceId {}

#[derive(Debug, Clone)]
pub struct LSequence(pub Sequence<CustomEvent>);

impl LuaUserData for LSequence {
	fn add_methods<'lua, M: LuaUserDataMethods<'lua, Self>>(methods: &mut M) {
		methods.add_method_mut("wait", |_: &Lua, this: &mut Self, duration: LDuration| {
			Ok(this.0.wait(duration.0))
		});

		methods.add_method_mut(
			"waitForInterval",
			|_: &Lua, this: &mut Self, interval: f64| Ok(this.0.wait_for_interval(interval)),
		);

		methods.add_method_mut("startLoop", |_: &Lua, this: &mut Self, _: ()| {
			Ok(this.0.start_loop())
		});

		methods.add_method_mut(
			"playSound",
			|_: &Lua, this: &mut Self, (sound_id, settings): (LSoundId, LInstanceSettings)| {
				Ok(LInstanceId(this.0.play_sound(sound_id.0, settings.0)))
			},
		);

		methods.add_method_mut(
			"setInstanceVolume",
			|_: &Lua, this: &mut Self, (id, volume): (LInstanceId, LValue)| {
				Ok(this.0.set_instance_volume(id.0, volume.0))
			},
		);

		methods.add_method_mut(
			"setInstancePitch",
			|_: &Lua, this: &mut Self, (id, pitch): (LInstanceId, LValue)| {
				Ok(this.0.set_instance_pitch(id.0, pitch.0))
			},
		);

		methods.add_method_mut(
			"pauseInstance",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LInstanceId, Option<LTween>)| {
				Ok(this.0.pause_instance(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut(
			"resumeInstance",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LInstanceId, Option<LTween>)| {
				Ok(this
					.0
					.resume_instance(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut(
			"stopInstance",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LInstanceId, Option<LTween>)| {
				Ok(this.0.stop_instance(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut(
			"pauseInstancesOfSound",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LSoundId, Option<LTween>)| {
				Ok(this
					.0
					.pause_instances_of_sound(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut(
			"resumeInstancesOfSound",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LSoundId, Option<LTween>)| {
				Ok(this
					.0
					.resume_instances_of_sound(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut(
			"stopInstancesOfSound",
			|_: &Lua, this: &mut Self, (id, fade_tween): (LSoundId, Option<LTween>)| {
				Ok(this
					.0
					.stop_instances_of_sound(id.0, fade_tween.map(|tween| tween.0)))
			},
		);

		methods.add_method_mut("startMetronome", |_: &Lua, this: &mut Self, _: ()| {
			Ok(this.0.start_metronome())
		});

		methods.add_method_mut("pauseMetronome", |_: &Lua, this: &mut Self, _: ()| {
			Ok(this.0.pause_metronome())
		});

		methods.add_method_mut("stopMetronome", |_: &Lua, this: &mut Self, _: ()| {
			Ok(this.0.stop_metronome())
		});

		methods.add_method_mut(
			"emitCustomEvent",
			|_: &Lua, this: &mut Self, event: CustomEvent| Ok(this.0.emit_custom_event(event)),
		);
	}
}
