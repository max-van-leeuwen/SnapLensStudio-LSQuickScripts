<p class="has-line-data" data-line-start="1" data-line-end="2">Cheat sheet for my most-used JS snippets in Lens Studio. Will update this every once in a while. Example project included!</p>
<p class="has-line-data" data-line-start="1" data-line-end="2">Installation: Just copy functions from this script to your own scripts, or throw the LSQuickScripts.js on a SceneObject and you can call all functions from any script in the project.</p>
<br>
<p class="has-line-data" data-line-start="11" data-line-end="12">Some examples: <a href="https://gfycat.com/dishonestflimsyafricanmolesnake">https://gfycat.com/dishonestflimsyafricanmolesnake</a></p>
<br>
<p class="has-line-data" data-line-start="2" data-line-end="5"><a href="https://twitter.com/maksvanleeuwen">Twitter (@maksvanleeuwen)</a>
<br><br>

<pre><code>
CONTENTS:
--------------------


global.lsqs : Script Component
 Returns the Script component this script is on, useful for managing events created by this script.


-


global.LS_BOX_SCALE : Number
	Constant value for default box mesh scale in Lens Studio.


-


global.interp(t [Number], startValue [Number], endValue [Number], easing (optional) [string], type (optional) [string], unclamped (optional) [bool]) : Number
	Returns the value of t interpolated using Tween functions between the start and end values. Set the easing function and type (optional) by string, use the below list as reference.
	Only using t, startValue and endValue is identical to a linear (unclamped) lerp.

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


global.instSound(audioAsset [Asset.AudioTrackAsset], fadeIn (optional) [Number], fadeOut (optional) [Number], offset (optional) [Number], mixToSnap (optional) [bool]) : AudioComponent
	Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.
	Returns the AudioComponent.


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


global.shuffleArray(array [array]) : array
	Returns a randomly shuffled copy of the array.


-


global.rollingAverage(oldVal [Numver], oldSampleCount [Number], addedVal [Number]) : Number
	Returns a new value that is the average of oldVal and addedVal, where oldVal is already an average of oldSampleCount amount of numbers.
	Make sure to increase the counter passed into oldSampleCount after getting this result, so it can give reliable results again at a later time.

		Examples:
			var avg;
			var samples;
			var controlAvg;
			for(var i = 0; i < 100; i++){
				var v = Math.random();
				if(avg === undefined){
					samples = 1;
					avg = v;
				}else{
					samples++;
					avg = global.rollingAverage(avg, samples, v);
				}
			}

			avg -> ~0.5
			

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


global.circularDistance(a [Number], b [Number], mod [Number]) : Number
	Returns the closest distance from a to b if the number line of length mod would be a circle.



-


global.measureWorldPos(screenPos [vec2], region [Component.ScreenTransform], cam [Component.Camera], dist [Number]) : vec3
	Returns the world position of a screen space coordinate within a screen transform component (-1 - 1).
	Useful for measuring out where to place a 3D model so it won't overlap with Snapchat's UI.



-


global.getAllComponents(componentNames [String Array], startObj [SceneObject]) : Array (Components)
	Returns an object containing lists of all components of types componentNames, also on child objects. If no startObj is given, it searches the whole scene.


		Example:
			var components = global.getAllComponents(["Component.VFXComponent", "Component.AudioComponent"])
			components = { "Component.VFXComponent"   : [ARRAY OF ALL VFX COMPONENTS IN SCENE],
					"Component.AudioComponent" : [ARRAY OF ALL AUDIO COMPONENTS IN SCENE]};



-


global.fadeProperty(func [Function], from [Number], to [Number], duration [Number], callback [Function]) : UpdateEvent
	Plays a simple cubic in/out animation, calling function func with argument from-to. At the end, it calls the callback function (optional).


-


global.parseNewLines(txt [string], customSplit (optional) [string]) : String
	Takes a string passed in through an @input string field containing '\n', and returns the same string but with real newlines (for use in a Text Component, for example).
	If customSplit is given, it replaces the '\n' characters.


--------------------
</code></pre>
