// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// playAudioShots
// Plays the audio asset in a loop, by instancing audio components to prevent clipping/pauses between individual loops.



//@ui {"widget":"label", "label":"Enable Start Loop to make the sound asset loop without clipping!"}
//@input bool startLoop
//@input Asset.AudioTrackAsset audio

//@ui {"widget":"label", "label":""}
//@input float loopDuration
//@input float stopLoopingAfter
//@input float fadeOutTime



var loop;



// loop.stop(<fade duration>) to stop after current loop, loop.stopNow(<fade duration>) to stop immediately
function stopLooping(){
	loop.stopNow(script.fadeOutTime);
}



if(script.startLoop){
	loop = global.instSoundLoop(script.audio, script.loopDuration);

	if(script.stopLoopingAfter != -1){
		global.delaySeconds(stopLooping, script.stopLoopingAfter);
	}
}