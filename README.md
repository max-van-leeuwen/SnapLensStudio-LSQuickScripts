<p class="has-line-data" data-line-start="1" data-line-end="2">Cheat sheet for my most-used JS snippets in Lens Studio. Will update this every once in a while. Example project included!</p>
<p class="has-line-data" data-line-start="1" data-line-end="2">Installation: Just throw the LSQuickScripts.js on a SceneObject and leave it at 'Initialized'. Now you can call all functions from any script in the project.</p>
<br><br>
<p class="has-line-data" data-line-start="5" data-line-end="6">Max van Leeuwen</p>
<p class="has-line-data" data-line-start="7" data-line-end="10"><a href="http://maxvanleeuwen.com">maxvanleeuwen.com</a><br>
ig @max.van.leeuwen<br>
twitter @maksvanleeuwen</p>
<p class="has-line-data" data-line-start="13" data-line-end="15">LSQuickScripts v0.2<br>
Global functions that can be called from any script in the project if this script is on a SceneObject.</p>
<p class="has-line-data" data-line-start="16" data-line-end="17">Some examples: <a href="https://gfycat.com/dishonestflimsyafricanmolesnake">https://gfycat.com/dishonestflimsyafricanmolesnake</a></p>
<p class="has-line-data" data-line-start="22" data-line-end="23">/////</p>
<p class="has-line-data" data-line-start="24" data-line-end="25">Full list of functions and their input/output:</p>
<p class="has-line-data" data-line-start="27" data-line-end="33">global.interp( float, float, float, int ) -&gt; float<br>
Returns an interpolated 0-1 value at time t (arg 0, a number between 0 and 1) between start and end values (arg 1, 2) using one of the following specified curves (arg 3):<br>
0: linear (like a lerp function)<br>
1: sine (slow start, fast middle and slow end)<br>
2: quadratic in (starts slow, accelerates)<br>
3: quadratic out (starts fast, slows down)</p>
<p class="has-line-data" data-line-start="34" data-line-end="36">Example: global.interp(x, 10, 15, 3);<br>
This will return the interpolated value between 10 and 15 at x, using a quadratic out-curve.</p>
<p class="has-line-data" data-line-start="38" data-line-end="40">global.degToRad( Degrees &lt;float/vec3&gt; ) -&gt; float/vec3<br>
Converts float or vec3 of degrees to float or vec3 of radians.</p>
<p class="has-line-data" data-line-start="42" data-line-end="44">global.radToDeg( Radians &lt;float/vec3&gt; ) -&gt; float/vec3<br>
Converts float or vec3 of radians to float or vec3 of degrees.</p>
<p class="has-line-data" data-line-start="46" data-line-end="48">global.rotationToEulerDeg( Rotation &lt;quat&gt; ) -&gt; vec3<br>
Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).</p>
<p class="has-line-data" data-line-start="50" data-line-end="52">global.rotationFromEulerDeg( Rotation &lt;vec3&gt; ) -&gt; quat<br>
Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).</p>
<p class="has-line-data" data-line-start="54" data-line-end="56">global.isInFront( Object to measure &lt;SceneObject&gt;, Object for comparison &lt;SceneObject&gt; ) -&gt; bool<br>
Checks if an object (arg 0) is in front of another object (arg 1).</p>
<p class="has-line-data" data-line-start="58" data-line-end="60">global.isInBox( Object &lt;SceneObject&gt;, Box &lt;SceneObject&gt; ) -&gt; bool<br>
Checks if an object (arg 0) is within the boundaries of a standard Lens Studio box mesh (arg 1).</p>
<p class="has-line-data" data-line-start="62" data-line-end="64">global.HSVtoRGB( Hue &lt;float&gt;, Saturation &lt;float&gt;, Value &lt;float&gt; ) -&gt; vec3<br>
Returns the RGB colour for a given Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.</p>
<p class="has-line-data" data-line-start="66" data-line-end="68">global.RGBtoHSV( RGB Colour &lt;vec3&gt; ) -&gt; vec3<br>
Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are in range 0-1.</p>
<p class="has-line-data" data-line-start="70" data-line-end="72">global.delayFunction( Function &lt;function&gt;, Wait time &lt;float&gt;, Arguments &lt;array&gt; ) -&gt; None<br>
Runs a function (arg 0) after a vertain amount of seconds (arg 1) with all arguments in the given array (arg 2).</p>
<p class="has-line-data" data-line-start="74" data-line-end="76">global.instSound( Audio Asset &lt;Asset.AudioTrackAsset&gt; ) -&gt; None<br>
THIS EATS PERFORMANCE, USE WITH CAUTION. Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.</p>
<p class="has-line-data" data-line-start="78" data-line-end="80">global.clamp( Value &lt;float&gt;, Low &lt;float&gt;, High &lt;float&gt; ) -&gt; float<br>
Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.</p>
