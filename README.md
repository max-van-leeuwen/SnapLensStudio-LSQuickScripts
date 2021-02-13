<p class="has-line-data" data-line-start="8" data-line-end="10">LSQuickScripts v0.4</p>
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

maxvanleeuwen.com
twitter 	@maksvanleeuwen
ig 		@max.van.leeuwen


ADDITIONAL CREDITS:
-------------------

Tween.js - Licensed under the MIT license
https:github.com/tweenjs/tween.js
See https:github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
Thank you all, you're awesome!

Snap Inc.

-------------------




FUNCTIONS EXPLAINED:
--------------------

global.QS_BOX_SCALE -> Number
	Constant value for default box mesh scale in Lens Studio.


global.interp(t <Number>, startValue <Number>, endValue <Number>, easing <string>, type (optional) <string>) -> Number
	Returns the value of t interpolated using Tween functions between the start and end values. Set the easing function and type (optional) by string:

		Easing:
			Linear
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


global.degToRad(degrees <Number/vec3>) -> Number/vec3
	Converts Number or vec3 of degrees to Number or vec3 of radians.


global.radToDeg(radians <Number/vec3>) -> Number/vec3
	Converts Number or vec3 of radians to Number or vec3 of degrees.


global.rotationToEulerDeg(rotation <quat>) -> vec3
	Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).


global.rotationFromEulerDeg(rotation <vec3>) -> quat
	Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).


global.isInFront(object to measure <SceneObject>, Object for comparison <SceneObject> ) -> bool
	Checks if an object (arg 0) is in front of another object (arg 1).


global.isInBox(object <SceneObject>, Box <SceneObject>) -> bool
	Checks if an object (arg 0) is within the boundaries of a default Lens Studio box mesh (arg 1).


global.HSVtoRGB(hue <Number>, Saturation <Number>, Value <Number>) -> vec3
	Returns the RGB colour for a given Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.


global.RGBtoHSV(RGB colour <vec3>) -> vec3
	Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are in range 0-1.


global.delayFunction(func <function>, wait (optional) <Number>, args (optional) <array>)
	Runs a function (arg 0) after a certain amount of seconds (arg 1) with all arguments in the given array (arg 2).

		Examples:
			global.delayFunction(doAfterTwoSeconds, 2, ["argument 1", "argument 2"]);
			global.delayFunction(doNextFrame);


global.instSound(audioAsset <Asset.AudioTrackAsset>)
	Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.


global.clamp(value <Number>, low <Number>, high <Number>) -> Number
	Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.


global.isSnapCamera(deviceCameraTexture <Asset.Texture>) -> bool
	Returns true if lens is running in Snap Camera. Takes the Device Camera Texture as its input.


global.randSeed(seed <int>) -> Number
	Returns a random value (0-1) based on the input seed. Uses mulberry32.


global.remap(value <Number>, low1 <Number>, high1 <Number>, low2 <Number>, high2 <Number>) -> Number
	Returns value remapped from range low1-high1 to range low2-high2.


global.encodeFloat(data <Number>, min <Number>, max <Number>) -> vec4
	Equivalent of the 'Pack' node in the material graph editor (32-bits).


global.decodeToFloat(encoded data <vec4>, min <Number>, max <Number>) -> Number
	Equivalent of the 'Unpack' node in the material graph editor (32-bits).


global.screenToScrTransform() -> vec2
	Returns ScreenTransform anchor center position (range [-1 - 1]) from screen coordinates ([0 - 1], with inversed vertical axis).


global.worldMeshClassify() -> string
	Returns the name of the world mesh classification index (e.g. global.worldMeshClassify(2) -> "Floor").


global.concatArrays(array <any>, array <any>) -> array
	Concatinates two arrays (of same type) and returns the new one.


global.beginStopwatch()
	Starts precise time measurement. Use with endStopwatch(), and optionally resetStopwatchAverage().


global.endStopwatch(showAverage <bool>)
	Ends stopwatch started with beginStopwatch(), prints precise time difference in seconds.
	If showAverage is true, the print will also include an average of all the results accumulated since the last resetStopwatchAverage().


global.resetStopwatchAverage()
	Tells stopwatch to start recording outputs on endStopwatch() from this point forward, getting the average stopwatch result (the longer it runs, the more precise it gets).
	Average is printed if showAverage=true in endStopwatch().


--------------------
</code></pre>
