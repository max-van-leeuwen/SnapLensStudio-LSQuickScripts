<p class="has-line-data" data-line-start="1" data-line-end="2">Cheat sheet for my most-used JS snippets in Lens Studio. Will update this every once in a while. Example project included!</p>
<p class="has-line-data" data-line-start="1" data-line-end="2">Installation: Just copy functions from this script to your own scripts, or throw the LSQuickScripts.js on a SceneObject and you can call all functions from any script in the project.</p>
<br>
<p class="has-line-data" data-line-start="11" data-line-end="12">Some examples: <a href="https://gfycat.com/dishonestflimsyafricanmolesnake">https://gfycat.com/dishonestflimsyafricanmolesnake</a></p>
<br>
<p class="has-line-data" data-line-start="2" data-line-end="5"><a href="https://twitter.com/maksvanleeuwen">Twitter (@maksvanleeuwen)</a>
<br><br>

<pre><code>
ALL FUNCTIONS:
-------------------


global.lsqs : Script Component
 Returns the Script component this script is on, useful for managing events created by this script.



-


global.LS_BOX_SCALE : Number
 Default box mesh scale in Lens Studio.



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


global.AnimateProperty() : animateProperty object
	Creates an easy-to-use animation 'class'. Can be used to easily animate any property without setting up the events around it.

		Example, showing all properties and their defaults:
			var anim = new global.animateProperty();
			anim.updateFunction = function(v){ print(v); };		// the function to execute on each frame (v is the current value)
			anim.from = 0;										// starting value
			anim.to = 1; 										// ending value
			anim.duration = 1;									// duration (seconds)
			anim.easeFunction = "Cubic";						// Animation curve (all Tween curves can be used)
			anim.easeType = "InOut";							// Animation type (all tween types can be used)
			anim.endFunction = function(){};					// function to call on animation end
			anim.pulse(newTimeRatio);							// updates animation once, at time 'newTimeRatio'
			anim.timeRatio = 0;									// live value (get and set), current animation time (linear, 0-1)
			anim.reversed = false;								// play animation backwards
			anim.start(reset); 									// starts animation (resets animation if optional 'reset' argument is true)
			anim.stop();										// stops animation



-


global.degToRad(degrees [Number/vec3]) : Number/vec3
	Converts Number or vec3 of degrees to Number or vec3 of radians.



global.radToDeg(radians [Number/vec3]) : Number/vec3
	Converts Number or vec3 of radians to Number or vec3 of degrees.



-


global.isInFront(objFront [SceneObject], objBehind [SceneObject] ) : bool
	Checks if objFront is in front of objBehind.



global.isInBox(object [SceneObject], box [SceneObject]) : bool
	Checks if object is within the boundaries of a default Lens Studio box.



-


global.HSVtoRGB(h [Number], s [Number], v [Number]) : vec3
	Returns the RGB color for a Hue, Saturation, and Value. All inputs and outputs are in range 0-1.



global.RGBtoHSV(rgb [vec3]) : vec3
	Returns the Hue, Saturation, and Value values for the specified color. Inputs and outputs are in range 0-1.



-


global.DoDelay( function (Function, optional), arguments (Array, optional) ) : doDelay object
	An object that makes it easy to schedule a function to run in the future (by frames or by seconds).

		Example, showing all properties:
			var delayed = new global.doDelay();
			delayed.func = function(arg){print(arg)}; 		// test function, this will print its first argument
			delayed.args = ['hello!'];						// arguments should be given as an array
			delayed.byFrame(10);							// this will print 'hello!' in 10 frames (function is called on the next frame, if no argument given)
			delayed.byTime(10);								// this will print 'hello!' in 10 seconds
			delayed.stop();									// this will stop the scheduled function

		One-liner for convenience:
			new global.doDelay(func, args).byTime(5);		// calls function func with arguments args (array) after 5 seconds



-


global.instSound(audioAsset [Asset.AudioTrackAsset], fadeIn (optional) [Number], fadeOut (optional) [Number], offset (optional) [Number], mixToSnap (optional) [bool]) : AudioComponent
	Plays a sound on a new (temporary) sound component, which allows multiple plays simultaneously without the audio clipping when it restarts.
	Instances are removed when done.
	Returns the AudioComponent.



-


global.clamp(value [Number], low [Number], high [Number]) : Number
	Returns the clamped value between the low and high values.



-


global.randSeed(seed [int]) : Number
	Returns a random value (0-1) based on an input seed. Uses mulberry32.



-


global.remap(value [Number], low1 [Number], high1 [Number], low2 [Number], high2 [Number], clamp [Bool]) : Number
	Returns value remapped from range low1-high1 to range low2-high2.


-


global.encodeFloat(data [Number], min [Number], max [Number]) : vec4
	Equivalent of the 'Pack' node in the material graph editor (32-bits).



global.decodeToFloat(encoded data [vec4], min [Number], max [Number]) : Number
	Equivalent of the 'Unpack' node in the material graph editor (32-bits).



-


global.screenToScrTransform(screenPos [vec2]) : vec2
	Returns ScreenTransform anchor center position (range -1 - 1) from screen coordinates (0-1, inversed y-axis).
	Inverse of global.scrTransformToScreen().



global.scrTransformToScreen(scrTransfCenter [vec2]) : vec2
	Returns screen coordinates (range 0-1) of Screen Transform anchors center.
	Inverse of global.screenToScrTransform().



-


global.worldMeshClassify() : string
	Returns the name of the world mesh classification index.

		Examples:
			global.worldMeshClassify(2) : "Floor"



-


global.shuffleArray(array [array]) : array
	Returns a randomly shuffled copy of the array.



-


global.MovingAverage() : movingAverage Object
	An object that makes it easy to keep track of a moving/rolling average.

		Example, showing all properties:
			var avg = new global.movingAverage();
			avg.add(v);									// usually the only thing you need, returns the new average and updates the sampleCount.
			avg.average;								// gets/sets the current average value (usually read-only, but in some cases you might want to set this to a starting value)
			avg.sampleCount; 							// gets/sets the current sample count value (usually read-only, but in some cases you might want to set this to a starting value)
			


-


global.Stopwatch() : stopwatch Object
	Does precise time management to see how well a function performs.
	Starting and stopping the stopwatch more than once will make it keep track of a moving average.

		Example, showing all properties:
			var stopwatch = new global.stopwatch();
			stopwatch.start();							// starts the stopwatch
			// do something else
			stopwatch.stop();							// stops the stopwatch, prints the results to the console


-



global.setAllChildrenToLayer(sceneObj [sceneObject], layer [LayerSet])
	Sets the sceneObject and all of its child objects and sub-child objects to render layer.



-


global.rotateCoords(point [vec2], pivot [vec2], angle [Number]) : vec2
	Rotate a 2D point around a pivot with specified angle (radians). Returns new 2D position.



-


global.circularDistance(a [Number], b [Number], mod [Number]) : Number
	Returns the closest distance from a to b if the number line of length mod is a circle.



-


global.measureWorldPos(screenPos [vec2], region [Component.ScreenTransform], cam [Component.Camera], dist [Number]) : vec3
	Returns the world position of a (-1 - 1) screen space coordinate (within a screen transform component).
	Useful, for example, for measuring out where to place a 3D model in the Safe Region so it won't overlap with Snapchat's UI.



-


global.getAllComponents(componentNames [Array of Strings], startObj [SceneObject]) : Array (Components)
	Returns an object containing lists of all components of types componentNames, also on child objects.
	If no startObj is given, it searches the whole scene.
	Make sure to pass in an array of component types, even if it's only one type.

		Example:
			var components = global.getAllComponents(["Component.VFXComponent", "Component.AudioComponent"])
				components = { "Component.VFXComponent"   : [ARRAY OF ALL VFX COMPONENTS IN SCENE],
							   "Component.AudioComponent" : [ARRAY OF ALL AUDIO COMPONENTS IN SCENE]};



-


global.parseNewLines(txt [string], customSplit (optional) [string]) : String
	Takes a string passed in through an input string field containing '\n', and returns the same string but with real newlines (for use in a Text Component, for example).
	If customSplit is given, it replaces the '\n' characters.



-------------------
</code></pre>
