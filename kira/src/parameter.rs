//! Provides an interface for smoothly changing values over time.

use std::sync::atomic::{AtomicUsize, Ordering};

static NEXT_PARAMETER_INDEX: AtomicUsize = AtomicUsize::new(0);

/// Represents a movement of one value to another over time.
#[derive(Debug, Copy, Clone, PartialEq)]
pub struct Tween(pub f64);

/**
A unique identifier for a `Parameter`.

You cannot create this manually - a `ParameterId` is created
when you create a parameter with an `AudioManager`.
*/
#[derive(Debug, Copy, Clone, Eq, PartialEq, Hash)]
pub struct ParameterId {
	index: usize,
}

impl ParameterId {
	pub(crate) fn new() -> Self {
		let index = NEXT_PARAMETER_INDEX.fetch_add(1, Ordering::Relaxed);
		Self { index }
	}
}

#[derive(Debug, Clone)]
struct TweenState {
	tween: Tween,
	start: f64,
	target: f64,
	progress: f64,
}

#[derive(Debug, Clone)]
pub(crate) struct Parameter {
	value: f64,
	tween_state: Option<TweenState>,
}

impl Parameter {
	pub fn new(value: f64) -> Self {
		Self {
			value,
			tween_state: None,
		}
	}

	pub fn value(&self) -> f64 {
		self.value
	}

	pub fn set(&mut self, target: f64, tween: Option<Tween>) {
		if let Some(tween) = tween {
			self.tween_state = Some(TweenState {
				tween,
				start: self.value,
				target: target,
				progress: 0.0,
			});
		} else {
			self.value = target;
		}
	}

	pub fn update(&mut self, dt: f64) -> bool {
		if let Some(tween_state) = &mut self.tween_state {
			let duration = tween_state.tween.0;
			tween_state.progress += dt / duration;
			tween_state.progress = tween_state.progress.min(1.0);
			self.value =
				tween_state.start + (tween_state.target - tween_state.start) * tween_state.progress;
			if tween_state.progress >= 1.0 {
				self.tween_state = None;
				return true;
			}
		}
		false
	}
}
