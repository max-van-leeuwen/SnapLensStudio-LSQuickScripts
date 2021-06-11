<p class="has-line-data" data-line-start="8" data-line-end="10">LSQuickScripts v1.0</p>
<br><br>
<p class="has-line-data" data-line-start="1" data-line-end="2">Cheat sheet for my most-used JS snippets in Lens Studio. Will update this every once in a while. Example project included!</p>
<p class="has-line-data" data-line-start="1" data-line-end="2">Installation: Just throw the LSQuickScripts.js on a SceneObject and leave it at 'Initialized'. Now you can call all functions from any script in the project.</p>
<br>
<p class="has-line-data" data-line-start="11" data-line-end="12">Some examples: <a href="https://gfycat.com/dishonestflimsyafricanmolesnake">https://gfycat.com/dishonestflimsyafricanmolesnake</a></p>
<br>
<p class="has-line-data" data-line-start="2" data-line-end="5"><a href="https://twitter.com/maksvanleeuwen">Twitter (@maksvanleeuwen)</a>
<p class="has-line-data" data-line-start="2" data-line-end="5"><a href="https://www.instagram.com/max.van.leeuwen">Ig (@max.van.leeuwen)</a>
<p class="has-line-data" data-line-start="2" data-line-end="5"><a href="http://maxvanleeuwen.com">maxvanleeuwen.com</a>
<br><br>

<pre><code>
Max van Leeuwen
LSQuickScripts - A cheat sheet for handy Lens Studio-ready functions I often use.

maxvanleeuwen.com
twitter 	@maksvanleeuwen
ig 		@max.van.leeuwen

github.com/max-van-leeuwen/SnapLensStudio-LSQuickScripts





ADDITIONAL CREDITS:
-------------------
Snap Inc.


Tween.js - Licensed under the MIT license
https://github.com/tweenjs/tween.js
See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
Thank you all, you're awesome!
-------------------





CONTENTS:
--------------------


global.LS_BOX_SCALE : Number
	Constant value for default box mesh scale in Lens Studio.


-


global.interp(t [Number], startValue [Number], endValue [Number], easing (optional) [string], type (optional) [string]) : Number
	Returns the value of t interpolated using Tween functions between the start and end values. Set the easing function and type (optional) by string:

		Easing:
			Linear (default)
			Quadratic
			Cubic
			Quartic
			Quintic
			Sinusoidal
			Exponential
			Circular
			Elastic
			Back
			Bounce

		Type:
			InOut (default)
			In
			Out

		Examples:
			global.interp(0.1, 0, 1, "Elastic", "In");
			global.interp(x, -5, 5, "Cubic");


-


global.degToRad(degrees [Number/vec3]) : Number/vec3
	Converts Number or vec3 of degrees to Number or vec3 of radians.


global.radToDeg(radians [Number/vec3]) : Number/vec3
	Converts Number or vec3 of radians to Number or vec3 of degrees.


-


global.rotationToEulerDeg(rotation [quat]) : vec3
	Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).


global.rotationFromEulerDeg(rotation [vec3]) : quat
	Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).


-


global.isInFront(objFront[SceneObject], objBehind [SceneObject] ) : bool
	Checks if an object (arg 0) is in front of another object (arg 1).


global.isInBox(object [SceneObject], box [SceneObject]) : bool
	Checks if an object (arg 0) is within the boundaries of a default Lens Studio box mesh (arg 1).


-


global.HSVtoRGB(h [Number], s [Number], v [Number]) : vec3
	Returns the RGB color for a Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.


global.RGBtoHSV(rgb [vec3]) : vec3
	Returns the Hue, Saturation, and Value values for the specified color. Inputs and outputs are in range 0-1.


-


global.delay(func [function], wait (optional) [Number], args (optional) [array]) : DelayedCallbackEvent
	Executes a function after a given amount of frames (whole number) with arguments. If no frame count is given, the function will execute on the next frame.
	Returns the event of type DelayedCallbackEvent (if wait > 0). Useful, for example, when cancelling it on runtime using [DelayedCallbackEvent].enabled = false.

		Examples:
			var delayedEvent = global.delay(doAfterTwoFrames, 2, ["argument 1", "argument 2"]);
			var delayedEvent = global.delay(doNextFrame);


global.delaySeconds(func [function], wait [Number], args (optional) [array]) : DelayedCallbackEvent
	Runs a function after an amount of seconds with all arguments in the array. If no wait time or a wait time of zero is given, the function will execute immediately.
	Returns the event of type DelayedCallbackEvent. Useful, for example, when cancelling it on runtime using [DelayedCallbackEvent].enabled = false.

		Examples:
			var delayedEvent = global.delaySeconds(doAfterTwoSeconds, 2, ["argument 1", "argument 2"]);


-


global.instSound(audioAsset [Asset.AudioTrackAsset], fadeIn (optional) [Number], fadeOut (optional) [Number])
	Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.
	Returns the AudioComponent.


global.instSoundLoop(audioAsset [Asset.AudioTrackAsset]) : Object
	Plays sounds on newly instantiated temporary sound components in a loop, preventing the sound from clipping like normal looping in a sound component does.
	Returns an object with function .stop(fadeOutDuration (optional) [Number]) to stop the looping after the current loop, or .stopNow(fadeOutDuration (optional) [Number]) to stop looping immediately.


-


global.clamp(value [Number], low [Number], high [Number]) : Number
	Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.


-


global.isSnapCamera() : bool
	Returns true if lens is running in Snap Camera.


-


global.randSeed(seed [int]) : Number
	Returns a random value (0-1) based on the input seed. Uses mulberry32.


-


global.remap(value [Number], low1 [Number], high1 [Number], low2 [Number], high2 [Number]) : Number
	Returns value remapped from range low1-high1 to range low2-high2.


-


global.encodeFloat(data [Number], min [Number], max [Number]) : vec4
	Equivalent of the 'Pack' node in the material graph editor (32-bits).


global.decodeToFloat(encoded data [vec4], min [Number], max [Number]) : Number
	Equivalent of the 'Unpack' node in the material graph editor (32-bits).


-


global.screenToScrTransform(screenPos [vec2]) : vec2
	Returns ScreenTransform anchor center position (range -1 - 1) from screen coordinates (0-1, inversed y-axis).


global.scrTransformToScreen(scrTransfCenter [vec2]) : vec2
	Returns screen coordinates (range 0-1) of Screen Transform anchors center. Inverse of screenToScrTransform().


-


global.worldMeshClassify() : string
	Returns the name of the world mesh classification index.

		Examples:
			global.worldMeshClassify(2) : "Floor"


-


global.concatArrays(array [any], array [any]) : array
	Concatinates two arrays (of same type) and returns the new one.


global.shuffleArray(array [array]) : array
	Returns a randomly shuffled copy of the array.


-


global.beginStopwatch()
	Starts precise time measurement.


global.endStopwatch(showAverage [bool])
	Ends stopwatch started with beginStopwatch(), prints precise time difference in seconds.
	If showAverage is true, the print will also include an average of all the stopwatch results accumulated since the last resetStopwatchAverage().


global.resetStopwatchAverage()
	Tells stopwatch to start recording outputs on endStopwatch() from this point forward, getting the average stopwatch result (the longer it runs, the more precise it gets).
	Average is printed if showAverage=true in endStopwatch().


-


global.setAllChildrenToLayer(sceneObj [sceneObject], layer [int])
	Sets the sceneObject and all of its child objects and sub-child objects to render layer by index.


-


global.rotateCoords(point [vec2], pivot [vec2], angle [Number]) : vec2
	Rotate a 2D point around a pivot with specified angle (radians). Returns new point.


-


global.matchYAxis(followTransform [transform]) : quat
	Returns a rotation which matches the world up-axis rotation of the transform. Useful for making minimaps of 3D scenes.


-


global.randomRadius(v [Number], radius [Number]) : Number
	Returns a random number near v. The radius it can return is a multiplier of this value.

		Example:
			global.randomRadius(10, 1) : Any number in range [5, 15).


-


global.findTween(tweenObject [SceneObject], tweenName [string]) : ScriptComponent
	Returns the tween's ScriptComponent. Useful for reading out the parameters set in the inspector.


		Example:
			global.findTween(obj, "tweenName").api.time : Number (read/write), duration of the tween component.


-


global.circularDistance(a [Number], b [Number], mod [Number]) : Number
	Returns the closest distance from a to b if the number line of length mod would be a circle.




--------------------
</code></pre>
