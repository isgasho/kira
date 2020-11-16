var searchIndex = JSON.parse('{\
"kira":{"doc":"Kira","i":[[3,"MetronomeSettings","kira","Settings for the metronome.",null,null],[12,"tempo","","The tempo of the metronome (in beats per minute).",0,null],[12,"interval_events_to_emit","","Which intervals (in beats) the metronome should emit…",0,null],[3,"StereoSample","","Represents an audio sample with a left and right channel.",null,null],[12,"left","","",1,null],[12,"right","","",1,null],[3,"Tempo","","Represents a tempo, or speed, of some music (in beats per…",null,null],[12,"0","","",2,null],[4,"Duration","","Represents a duration of time.",null,null],[13,"Seconds","","Represents a duration of time in seconds.",3,null],[13,"Beats","","Represents a duration of time in beats.",3,null],[4,"KiraError","","",null,null],[13,"NoDefaultOutputDevice","","",4,null],[13,"SupportedStreamConfigsError","","",4,null],[13,"NoSupportedAudioConfig","","",4,null],[13,"BuildStreamError","","",4,null],[13,"PlayStreamError","","",4,null],[13,"CommandQueueFull","","",4,null],[13,"UnsupportedChannelConfiguration","","",4,null],[13,"UnsupportedAudioFileFormat","","",4,null],[13,"InvalidSequenceLoopPoint","","",4,null],[13,"IoError","","",4,null],[13,"Mp3Error","","",4,null],[13,"VariableMp3SampleRate","","",4,null],[13,"UnknownMp3SampleRate","","",4,null],[13,"OggError","","",4,null],[13,"FlacError","","",4,null],[13,"WavError","","",4,null],[4,"Event","","An audio-related event that can be observed on the main…",null,null],[13,"MetronomeIntervalPassed","","Sent when the metronome passes a certain interval (in…",5,null],[13,"Custom","","A user-defined event.",5,null],[4,"Value","","A number that something can be set to.",null,null],[13,"Fixed","","",6,null],[13,"Parameter","","",6,null],[11,"in_seconds","","Gets the time in seconds.",3,[[["tempo",3]]]],[0,"instance","","Provides an interface to control \\\"instances\\\", or…",null,null],[3,"InstanceId","kira::instance","A unique identifier for an `Instance`.",null,null],[3,"LoopRegion","","A portion of a sound to loop.",null,null],[12,"start","","Where the loop starts. Defaults to the beginning of the…",7,null],[12,"end","","Where the loop ends. Defaults to the semantic duration of…",7,null],[3,"InstanceSettings","","Settings for an instance.",null,null],[12,"volume","","The volume of the instance.",8,null],[12,"pitch","","The pitch of the instance, as a factor of the original…",8,null],[12,"reverse","","Whether the instance should be played in reverse.",8,null],[12,"start_position","","The position to start playing the instance at (in seconds).",8,null],[12,"fade_in_duration","","Whether to fade in the instance from silence, and if so,…",8,null],[12,"loop_region","","Whether the instance should loop, and if so, the region to…",8,null],[12,"track","","Which track to play the instance on.",8,null],[4,"InstanceTrackIndex","","A track index for an instance to play on.",null,null],[13,"DefaultForSound","","The default track for the sound.",9,null],[13,"Custom","","A manually set track index.",9,null],[4,"LoopPoint","","A start or end point of a loop (in seconds).",null,null],[13,"Default","","The default start or end point.",10,null],[13,"Custom","","A manually set start or end point.",10,null],[11,"new","","Creates a new `InstanceSettings` with the default settings.",8,[[]]],[11,"volume","","Sets the volume of the instance.",8,[[["into",8],["value",4]]]],[11,"pitch","","Sets the pitch of the instance.",8,[[["into",8],["value",4]]]],[11,"reverse","","Enables reverse playback for the instance.",8,[[]]],[11,"start_position","","Sets where in the sound playback will start (in seconds).",8,[[]]],[11,"fade_in_duration","","Sets the amount of time the instance will take to fade in…",8,[[]]],[11,"loop_region","","Sets the portion of the sound that should be looped.",8,[[["into",8],["loopregion",3]]]],[11,"track","","Sets the track the instance will play on.",8,[[["into",8],["instancetrackindex",4]]]],[0,"manager","kira","Provides a bridge between the main thread and the audio…",null,null],[3,"AudioManagerSettings","kira::manager","Settings for an `AudioManager`.",null,null],[12,"num_commands","","The number of commands that be sent to the audio thread at…",11,null],[12,"num_events","","The number of events the audio thread can send at a time.",11,null],[12,"num_sounds","","The maximum number of sounds that can be loaded at a time.",11,null],[12,"num_parameters","","The maximum number of parameters that can exist at a time.",11,null],[12,"num_instances","","The maximum number of instances of sounds that can be…",11,null],[12,"num_sequences","","The maximum number of sequences that can be running at a…",11,null],[12,"num_tracks","","The maximum number of mixer tracks that can be used at a…",11,null],[12,"num_effects_per_track","","The maximum number of effects that can be running at a…",11,null],[12,"metronome_settings","","Settings for the metronome.",11,null],[3,"AudioManager","","Plays and manages audio.",null,null],[11,"new","","Creates a new audio manager and starts an audio thread.",12,[[["audiomanagersettings",3]],["kiraresult",6]]],[11,"add_sound","","Sends a sound to the audio thread and returns a handle to…",12,[[["sound",3]],[["soundid",3],["kiraresult",6]]]],[11,"remove_sound","","Removes a sound from the audio thread, allowing its memory…",12,[[["soundid",3]],["kiraresult",6]]],[11,"play_sound","","Plays a sound.",12,[[["soundid",3],["instancesettings",3]],[["kiraerror",4],["result",4],["instanceid",3]]]],[11,"set_instance_volume","","Sets the volume of an instance.",12,[[["value",4],["instanceid",3]],[["result",4],["kiraerror",4]]]],[11,"set_instance_pitch","","Sets the pitch of an instance.",12,[[["value",4],["instanceid",3]],[["result",4],["kiraerror",4]]]],[11,"pause_instance","","Pauses a currently playing instance of a sound with an…",12,[[["tween",3],["option",4],["instanceid",3]],[["result",4],["kiraerror",4]]]],[11,"resume_instance","","Resumes a currently paused instance of a sound with an…",12,[[["tween",3],["option",4],["instanceid",3]],[["result",4],["kiraerror",4]]]],[11,"stop_instance","","Stops a currently playing instance of a sound with an…",12,[[["tween",3],["option",4],["instanceid",3]],[["result",4],["kiraerror",4]]]],[11,"pause_instances_of_sound","","Pauses all currently playing instances of a sound with an…",12,[[["soundid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"resume_instances_of_sound","","Resumes all currently playing instances of a sound with an…",12,[[["soundid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"stop_instances_of_sound","","Stops all currently playing instances of a sound with an…",12,[[["soundid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"set_metronome_tempo","","Sets the tempo of the metronome.",12,[[["tempo",3]],[["result",4],["kiraerror",4]]]],[11,"start_metronome","","Starts or resumes the metronome.",12,[[],[["result",4],["kiraerror",4]]]],[11,"pause_metronome","","Pauses the metronome.",12,[[],[["result",4],["kiraerror",4]]]],[11,"stop_metronome","","Stops and resets the metronome.",12,[[],[["result",4],["kiraerror",4]]]],[11,"start_sequence","","Starts a sequence.",12,[[["sequence",3]],[["sequenceid",3],["result",4],["kiraerror",4]]]],[11,"mute_sequence","","Mutes a sequence.",12,[[["sequenceid",3]],[["result",4],["kiraerror",4]]]],[11,"unmute_sequence","","Unmutes a sequence.",12,[[["sequenceid",3]],[["result",4],["kiraerror",4]]]],[11,"pause_sequence","","Pauses a sequence.",12,[[["sequenceid",3]],[["result",4],["kiraerror",4]]]],[11,"resume_sequence","","Resumes a sequence.",12,[[["sequenceid",3]],[["result",4],["kiraerror",4]]]],[11,"stop_sequence","","Stops a sequence.",12,[[["sequenceid",3]],[["result",4],["kiraerror",4]]]],[11,"pause_sequence_and_instances","","Pauses a sequence and any instances played by that sequence.",12,[[["sequenceid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"resume_sequence_and_instances","","Resumes a sequence and any instances played by that…",12,[[["sequenceid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"stop_sequence_and_instances","","Stops a sequence and any instances played by that sequence.",12,[[["sequenceid",3],["tween",3],["option",4]],[["result",4],["kiraerror",4]]]],[11,"add_parameter","","Creates a parameter with the specified starting value.",12,[[],[["parameterid",3],["kiraresult",6]]]],[11,"remove_parameter","","Removes a parameter.",12,[[["parameterid",3]],["kiraresult",6]]],[11,"set_parameter","","Sets the value of a parameter with an optional tween to…",12,[[["tween",3],["option",4],["parameterid",3]],["kiraresult",6]]],[11,"add_sub_track","","Creates a mixer sub-track.",12,[[["tracksettings",3]],[["kiraresult",6],["subtrackid",3]]]],[11,"remove_sub_track","","Removes a sub-track from the mixer.",12,[[["subtrackid",3]],["kiraresult",6]]],[11,"add_effect_to_track","","Adds an effect to a track.",12,[[["copy",8],["into",8],["effect",8],["box",3],["effectsettings",3],["trackindex",4]],[["effectid",3],["kiraresult",6]]]],[11,"remove_effect","","Removes an effect from the mixer.",12,[[["effectid",3]],["kiraresult",6]]],[11,"events","","Returns a list of all of the new events created by the…",12,[[],[["vec",3],["event",4]]]],[11,"free_unused_resources","","Frees resources that are no longer in use, such as…",12,[[]]],[0,"mixer","kira","Provides an interface for organizing and applying effects…",null,null],[3,"SubTrackId","kira::mixer","A unique identifier for a sub-track.",null,null],[3,"TrackSettings","","Settings for a mixer track.",null,null],[12,"volume","","The volume of the track.",13,null],[4,"TrackIndex","","Represents a mixer track.",null,null],[13,"Main","","The main track.",14,null],[13,"Sub","","A sub-track.",14,null],[0,"effect","","",null,null],[3,"EffectId","kira::mixer::effect","A unique identifier for an `Effect`.",null,null],[3,"EffectSettings","","Settings for an effect.",null,null],[12,"enabled","","Whether the effect is initially enabled.",15,null],[0,"svf","","",null,null],[3,"StateVariableFilterSettings","kira::mixer::effect::svf","",null,null],[12,"mode","","",16,null],[12,"cutoff","","",16,null],[12,"resonance","","",16,null],[3,"StateVariableFilter","","",null,null],[4,"StateVariableFilterMode","","",null,null],[13,"LowPass","","",17,null],[13,"BandPass","","",17,null],[13,"HighPass","","",17,null],[13,"Notch","","",17,null],[11,"new","","",18,[[["statevariablefiltersettings",3]]]],[8,"Effect","kira::mixer::effect","",null,null],[10,"process","","",19,[[["stereosample",3],["parameters",3]],["stereosample",3]]],[11,"track_index","","Gets the mixer track that this effect applies to.",20,[[],["trackindex",4]]],[0,"parameter","kira","Provides an interface for smoothly changing values over…",null,null],[3,"Tween","kira::parameter","Represents a movement of one value to another over time.",null,null],[12,"0","","",21,null],[3,"ParameterId","","A unique identifier for a `Parameter`.",null,null],[0,"sequence","kira","Provides an interface to script timed audio events.",null,null],[3,"SequenceId","kira::sequence","A unique identifier for a `Sequence`.",null,null],[3,"Sequence","","A series of audio-related actions to take at specific times.",null,null],[11,"new","","Creates a new sequence.",22,[[]]],[11,"wait","","Adds a step to wait for a certain length of time before…",22,[[["duration",4]]]],[11,"wait_for_interval","","Adds a step to wait for a certain metronome interval (in…",22,[[]]],[11,"start_loop","","Marks the point the sequence will loop back to after it…",22,[[]]],[11,"play_sound","","Adds a step to play a sound.",22,[[["soundid",3],["instancesettings",3]],["instanceid",3]]],[11,"set_instance_volume","","Adds a step to set the volume of an instance.",22,[[["value",4],["instanceid",3]]]],[11,"set_instance_pitch","","Adds a step to set the pitch of an instance.",22,[[["value",4],["instanceid",3]]]],[11,"pause_instance","","Adds a step to pause an instance.",22,[[["tween",3],["option",4],["instanceid",3]]]],[11,"resume_instance","","Adds a step to resume an instance.",22,[[["tween",3],["option",4],["instanceid",3]]]],[11,"stop_instance","","Adds a step to stop an instance.",22,[[["tween",3],["option",4],["instanceid",3]]]],[11,"pause_instances_of_sound","","Adds a step to pause all instances of a sound.",22,[[["soundid",3],["tween",3],["option",4]]]],[11,"resume_instances_of_sound","","Adds a step to resume all instances of a sound.",22,[[["soundid",3],["tween",3],["option",4]]]],[11,"stop_instances_of_sound","","Adds a step to stop all instances of a sound.",22,[[["soundid",3],["tween",3],["option",4]]]],[11,"pause_instances_of_sequence","","Adds a step to pause all instances played by a sequence.",22,[[["sequenceid",3],["tween",3],["option",4]]]],[11,"resume_instances_of_sequence","","Adds a step to resume all instances played by a sequence.",22,[[["sequenceid",3],["tween",3],["option",4]]]],[11,"stop_instances_of_sequence","","Adds a step to stop all instances played by a sequence.",22,[[["sequenceid",3],["tween",3],["option",4]]]],[11,"set_metronome_tempo","","Adds a step to set the tempo of the metronome.",22,[[["tempo",3]]]],[11,"start_metronome","","Adds a step to start the metronome.",22,[[]]],[11,"pause_metronome","","Adds a step to pause the metronome.",22,[[]]],[11,"stop_metronome","","Adds a step to stop the metronome.",22,[[]]],[11,"set_parameter","","Adds a step to set a parameter.",22,[[["tween",3],["option",4],["parameterid",3]]]],[11,"emit_custom_event","","Adds a step to emit a custom event.",22,[[]]],[0,"sound","kira","Provides an interface to work with pieces of audio.",null,null],[3,"SoundId","kira::sound","A unique identifier for a `Sound`.",null,null],[3,"SoundMetadata","","Useful info about a `Sound`.",null,null],[12,"semantic_duration","","How long the sound is musically.",23,null],[3,"SoundSettings","","Settings for a sound.",null,null],[12,"default_track","","The track instances of this sound will play on by default.",24,null],[12,"cooldown","","Whether the sound should have a \\\"cool off\\\" period after…",24,null],[12,"metadata","","Information about the sound.",24,null],[3,"Sound","","A piece of audio that can be played by an `AudioManager`.",null,null],[11,"duration","","",25,[[]]],[11,"default_track_index","","",25,[[],["trackindex",4]]],[11,"metadata","","",25,[[],["soundmetadata",3]]],[11,"new","","Creates a new sound from raw sample data.",26,[[["stereosample",3],["soundsettings",3],["vec",3]]]],[11,"from_mp3_file","","Decodes a sound from an mp3 file.",26,[[["soundsettings",3]],["kiraresult",6]]],[11,"from_ogg_file","","Decodes a sound from an ogg file.",26,[[["soundsettings",3]],["kiraresult",6]]],[11,"from_flac_file","","Decodes a sound from a flac file.",26,[[["soundsettings",3]],["kiraresult",6]]],[11,"from_wav_file","","Decodes a sound from a wav file.",26,[[["soundsettings",3]],["kiraresult",6]]],[11,"from_file","","Decodes a sound from a file.",26,[[["soundsettings",3]],["kiraresult",6]]],[11,"default_track","","Gets the default track that the sound plays on.",26,[[],["trackindex",4]]],[11,"duration","","Gets the duration of the sound (in seconds).",26,[[]]],[11,"metadata","","Gets the metadata associated with the sound.",26,[[],["soundmetadata",3]]],[11,"get_sample_at_position","","Gets the sample at an arbitrary time in seconds,…",26,[[],["stereosample",3]]],[11,"new","kira","Creates a sample with the given left and right values.",1,[[]]],[11,"from_mono","","Creates a sample with both the left and right channels set…",1,[[]]],[11,"from_i32","","Creates a sample from `i32`s with the given bit depth.",1,[[]]],[11,"beats_to_seconds","","Converts a number of beats at this tempo to a length of…",2,[[]]],[6,"KiraResult","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","kira::instance","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"equivalent","","",27,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","kira::manager","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","kira::mixer","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_owned","","",28,[[]]],[11,"clone_into","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"equivalent","","",28,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"equivalent","","",14,[[]]],[11,"from","kira::mixer::effect","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"equivalent","","",20,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","kira::mixer::effect::svf","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","kira::parameter","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"to_owned","","",29,[[]]],[11,"clone_into","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"equivalent","","",29,[[]]],[11,"from","kira::sequence","",30,[[]]],[11,"into","","",30,[[]]],[11,"to_owned","","",30,[[]]],[11,"clone_into","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"equivalent","","",30,[[]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","kira::sound","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"equivalent","","",25,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"process","kira::mixer::effect::svf","",18,[[["stereosample",3],["parameters",3]],["stereosample",3]]],[11,"drop","kira::manager","",12,[[]]],[11,"from","kira","",4,[[["error",3]]]],[11,"from","","",4,[[["error",4]]]],[11,"from","","",4,[[["vorbiserror",4]]]],[11,"from","","",4,[[["error",4]]]],[11,"from","","",4,[[["error",4]]]],[11,"from","","",4,[[["supportedstreamconfigserror",4]]]],[11,"from","","",4,[[["buildstreamerror",4]]]],[11,"from","","",4,[[["playstreamerror",4]]]],[11,"from","kira::instance","",9,[[["trackindex",4]]]],[11,"from","","",9,[[["subtrackid",3]]]],[11,"from","","",7,[[["rangefull",3]]]],[11,"from","","",7,[[["rangefrom",3]]]],[11,"from","","",7,[[["rangeto",3]]]],[11,"from","","",7,[[["range",3]]]],[11,"from","kira::mixer","",14,[[["subtrackid",3]]]],[11,"from","kira","",2,[[]]],[11,"from","","",6,[[]]],[11,"from","","",6,[[["parameterid",3]]]],[11,"clone","","",3,[[],["duration",4]]],[11,"clone","","",5,[[],["event",4]]],[11,"clone","kira::instance","",27,[[],["instanceid",3]]],[11,"clone","","",9,[[],["instancetrackindex",4]]],[11,"clone","","",10,[[],["looppoint",4]]],[11,"clone","","",7,[[],["loopregion",3]]],[11,"clone","","",8,[[],["instancesettings",3]]],[11,"clone","kira","",0,[[],["metronomesettings",3]]],[11,"clone","kira::mixer::effect::svf","",17,[[],["statevariablefiltermode",4]]],[11,"clone","","",16,[[],["statevariablefiltersettings",3]]],[11,"clone","","",18,[[],["statevariablefilter",3]]],[11,"clone","kira::mixer::effect","",20,[[],["effectid",3]]],[11,"clone","","",15,[[],["effectsettings",3]]],[11,"clone","kira::mixer","",28,[[],["subtrackid",3]]],[11,"clone","","",14,[[],["trackindex",4]]],[11,"clone","","",13,[[],["tracksettings",3]]],[11,"clone","kira::parameter","",21,[[],["tween",3]]],[11,"clone","","",29,[[],["parameterid",3]]],[11,"clone","kira::sequence","",30,[[],["sequenceid",3]]],[11,"clone","","",22,[[],["sequence",3]]],[11,"clone","kira::sound","",25,[[],["soundid",3]]],[11,"clone","","",23,[[],["soundmetadata",3]]],[11,"clone","","",24,[[],["soundsettings",3]]],[11,"clone","kira","",1,[[],["stereosample",3]]],[11,"clone","","",2,[[],["tempo",3]]],[11,"clone","","",6,[[],["value",4]]],[11,"default","kira::instance","",9,[[]]],[11,"default","","",10,[[]]],[11,"default","","",7,[[],["loopregion",3]]],[11,"default","","",8,[[]]],[11,"default","kira::manager","",11,[[]]],[11,"default","kira","",0,[[]]],[11,"default","kira::mixer::effect::svf","",16,[[]]],[11,"default","kira::mixer::effect","",15,[[]]],[11,"default","kira::mixer","",13,[[]]],[11,"default","kira::sound","",23,[[],["soundmetadata",3]]],[11,"default","","",24,[[]]],[11,"eq","kira","",3,[[["duration",4]]]],[11,"ne","","",3,[[["duration",4]]]],[11,"eq","kira::instance","",27,[[["instanceid",3]]]],[11,"ne","","",27,[[["instanceid",3]]]],[11,"eq","kira::mixer::effect","",20,[[["effectid",3]]]],[11,"ne","","",20,[[["effectid",3]]]],[11,"eq","kira::mixer","",28,[[["subtrackid",3]]]],[11,"ne","","",28,[[["subtrackid",3]]]],[11,"eq","","",14,[[["trackindex",4]]]],[11,"ne","","",14,[[["trackindex",4]]]],[11,"eq","kira::parameter","",21,[[["tween",3]]]],[11,"ne","","",21,[[["tween",3]]]],[11,"eq","","",29,[[["parameterid",3]]]],[11,"ne","","",29,[[["parameterid",3]]]],[11,"eq","kira::sequence","",30,[[["sequenceid",3]]]],[11,"ne","","",30,[[["sequenceid",3]]]],[11,"eq","kira::sound","",25,[[]]],[11,"eq","kira","",1,[[["stereosample",3]]]],[11,"ne","","",1,[[["stereosample",3]]]],[11,"eq","","",2,[[["tempo",3]]]],[11,"ne","","",2,[[["tempo",3]]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","kira::instance","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","kira","",0,[[["formatter",3]],["result",6]]],[11,"fmt","kira::mixer::effect::svf","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","kira::mixer::effect","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","kira::mixer","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","kira::parameter","",21,[[["formatter",3]],["result",6]]],[11,"fmt","","",29,[[["formatter",3]],["result",6]]],[11,"fmt","kira::sequence","",30,[[["formatter",3]],["result",6]]],[11,"fmt","","",22,[[["formatter",3]],["result",6]]],[11,"fmt","kira::sound","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",24,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","kira","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"div","","",3,[[]]],[11,"div","","",1,[[]]],[11,"sub","","",1,[[]]],[11,"add","","",1,[[]]],[11,"mul","","",3,[[]]],[11,"mul","","",1,[[]]],[11,"neg","","",1,[[]]],[11,"add_assign","","",1,[[]]],[11,"sub_assign","","",1,[[]]],[11,"mul_assign","","",3,[[]]],[11,"mul_assign","","",1,[[]]],[11,"div_assign","","",3,[[]]],[11,"div_assign","","",1,[[]]],[11,"hash","kira::instance","",27,[[]]],[11,"hash","kira::mixer::effect","",20,[[]]],[11,"hash","kira::mixer","",28,[[]]],[11,"hash","","",14,[[]]],[11,"hash","kira::parameter","",29,[[]]],[11,"hash","kira::sequence","",30,[[]]],[11,"hash","kira::sound","",25,[[]]]],"p":[[3,"MetronomeSettings"],[3,"StereoSample"],[3,"Tempo"],[4,"Duration"],[4,"KiraError"],[4,"Event"],[4,"Value"],[3,"LoopRegion"],[3,"InstanceSettings"],[4,"InstanceTrackIndex"],[4,"LoopPoint"],[3,"AudioManagerSettings"],[3,"AudioManager"],[3,"TrackSettings"],[4,"TrackIndex"],[3,"EffectSettings"],[3,"StateVariableFilterSettings"],[4,"StateVariableFilterMode"],[3,"StateVariableFilter"],[8,"Effect"],[3,"EffectId"],[3,"Tween"],[3,"Sequence"],[3,"SoundMetadata"],[3,"SoundSettings"],[3,"SoundId"],[3,"Sound"],[3,"InstanceId"],[3,"SubTrackId"],[3,"ParameterId"],[3,"SequenceId"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);