# SnapLensStudio-LSQuickScripts
Cheat sheet for most-used JS snippets in Lens Studio. Will update this every once in a while.
Example project included.

<br/>

Some examples: https://gfycat.com/dishonestflimsyafricanmolesnake

<br/>
<br/>
<br/>

All current functions:


global.interp( float, float, float, int ) -> float
Returns an interpolated 0-1 value at time t (argument 0, a number between 0 and 1) between start and end values (agrument 1, 2) using one of the following specified curves (argument 3):
<br/>
0: linear (like a lerp function)

1: sine (slow start, fast middle and slow end)

2: quadratic in (starts slow, accelerates)

3: quadratic out (starts fast, slows down)

Example: global.interp(x, 10, 15, 3);
This will return the interpolated value between 10 and 15 at x, using a quadratic out-curve.

<br/>

global.degToRad( float or vec3 ) -> float or vec3
Converts float or vec3 of degrees to float or vec3 of radians.

<br/>

global.radToDeg( float or vec3 ) -> float or vec3
Converts float or vec3 of radians to float or vec3 of degrees.

<br/>

global.rotationToEulerDeg( quat ) -> vec3
Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).

<br/>

global.rotationFromEulerDeg( vec3 ) -> quat
Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in s etWorldRotation()).

<br/>

global.isInFront( SceneObject, SceneObject ) -> bool
Checks if object (argument 0) is in front of another object (argument 1).

<br/>

global.isInBox( SceneObject, SceneObject ) -> bool
Checks if an object (argument 1) is within the boundaries of a Box object (argument 0, no rotation).

<br/>

global.HSVtoRGB( float, float, float ) -> vec3
Returns the RGB colour for a given Hue (argument 0), Saturation (argument 1), and Value (argument 2). All inputs and outputs are 0-1.

<br/>

global.RGBtoHSV( vec3 ) -> vec3
Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are 0-1.
