
Cheat sheet for most-used JS snippets in Lens Studio. Will update this every once in a while. Example project included!



Max van Leeuwen

maxvanleeuwen.com
ig @max.van.leeuwen
twitter @maksvanleeuwen



LSQuickScripts v0.2
Global functions that can be called from any script in the project if this script is on a SceneObject.

Some examples: https://gfycat.com/dishonestflimsyafricanmolesnake





/////

Full list of functions and their input/output:


global.interp( float, float, float, int ) -> float
Returns an interpolated 0-1 value at time t (arg 0, a number between 0 and 1) between start and end values (arg 1, 2) using one of the following specified curves (arg 3):
	0: linear (like a lerp function)
	1: sine (slow start, fast middle and slow end)
	2: quadratic in (starts slow, accelerates)
	3: quadratic out (starts fast, slows down)

Example: global.interp(x, 10, 15, 3);
This will return the interpolated value between 10 and 15 at x, using a quadratic out-curve.


global.degToRad( Degrees <float/vec3> ) -> float/vec3
Converts float or vec3 of degrees to float or vec3 of radians.


global.radToDeg( Radians <float/vec3> ) -> float/vec3
Converts float or vec3 of radians to float or vec3 of degrees.


global.rotationToEulerDeg( Rotation <quat> ) -> vec3
Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).


global.rotationFromEulerDeg( Rotation <vec3> ) -> quat
Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).


global.isInFront( Object to measure <SceneObject>, Object for comparison <SceneObject> ) -> bool
Checks if an object (arg 0) is in front of another object (arg 1).


global.isInBox( Object <SceneObject>, Box <SceneObject> ) -> bool
Checks if an object (arg 0) is within the boundaries of a standard Lens Studio box mesh (arg 1).


global.HSVtoRGB( Hue <float>, Saturation <float>, Value <float> ) -> vec3
Returns the RGB colour for a given Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.


global.RGBtoHSV( RGB Colour <vec3> ) -> vec3
Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are in range 0-1.


global.delayFunction( Function <function>, Wait time <float>, Arguments <array> ) -> None
Runs a function (arg 0) after a vertain amount of seconds (arg 1) with all arguments in the given array (arg 2).


global.instSound( Audio Asset <Asset.AudioTrackAsset> ) -> None
THIS EATS PERFORMANCE, USE WITH CAUTION. Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.


global.clamp( Value <float>, Low <float>, High <float> ) -> float
Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.
