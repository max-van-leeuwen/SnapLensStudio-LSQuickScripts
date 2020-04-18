// Max van Leeuwen
//
// maxvanleeuwen.com
// ig @max.van.leeuwen
// twitter @maksvanleeuwen
//
//
//
// LSQuickScripts v0.3
// Global functions that can be called from any script in the project if this script is on a SceneObject.
//
// Some examples: https://gfycat.com/dishonestflimsyafricanmolesnake
//
//
//
//
//
// /////
//
// Full list of functions and their input/output:
//
//
// global.interp( float, float, float, int ) -> float
// Returns an interpolated 0-1 value at time t (arg 0, a number between 0 and 1) between start and end values (arg 1, 2) using one of the following specified curves (arg 3):
//	0: linear (like a lerp function)
//	1: sine (slow start, fast middle and slow end)
//	2: quadratic in (starts slow, accelerates)
//	3: quadratic out (starts fast, slows down)
//
// Example: global.interp(x, 10, 15, 3);
// This will return the interpolated value between 10 and 15 at x, using a quadratic out-curve.
//
//
// global.degToRad( Degrees <float/vec3> ) -> float/vec3
// Converts float or vec3 of degrees to float or vec3 of radians.
//
//
// global.radToDeg( Radians <float/vec3> ) -> float/vec3
// Converts float or vec3 of radians to float or vec3 of degrees.
//
//
// global.rotationToEulerDeg( Rotation <quat> ) -> vec3
// Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).
//
//
// global.rotationFromEulerDeg( Rotation <vec3> ) -> quat
// Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).
//
//
// global.isInFront( Object to measure <SceneObject>, Object for comparison <SceneObject> ) -> bool
// Checks if an object (arg 0) is in front of another object (arg 1).
//
//
// global.isInBox( Object <SceneObject>, Box <SceneObject> ) -> bool
// Checks if an object (arg 0) is within the boundaries of a standard Lens Studio box mesh (arg 1).
//
//
// global.HSVtoRGB( Hue <float>, Saturation <float>, Value <float> ) -> vec3
// Returns the RGB colour for a given Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.
//
//
// global.RGBtoHSV( RGB Colour <vec3> ) -> vec3
// Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are in range 0-1.
//
//
// global.delayFunction( Function <function>, Wait time <float>, Arguments <array> ) -> None
// Runs a function (arg 0) after a vertain amount of seconds (arg 1) with all arguments in the given array (arg 2).
//
//
// global.instSound( Audio Asset <Asset.AudioTrackAsset> ) -> None
// THIS EATS PERFORMANCE, USE WITH CAUTION. Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.
//
//
// global.clamp( Value <float>, Low <float>, High <float> ) -> float
// Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.
//
//
// global.isSnapCamera( Device Camera Texture <Asset.Texture> ) -> bool
// Returns true if lens is running in Snap Camera. Takes the Device Camera Texture as its input.
//
//
// /////




//@ui {"widget":"label", "label":"LSQuickScripts"}
//@ui {"widget":"label", "label":"By Max van Leeuwen"}
//@ui {"widget":"label", "label":"-"}
//@ui {"widget":"label", "label":"Leave at 'Initialized'. For help, see:"}
//@ui {"widget":"label", "label":"maxvanleeuwen.com/downloads/#LSQuickScripts"}




global.interp = function(t, s, e, i){

	// clamp t 0-1
	t = global.clamp(t, 0, 1);

	// check i value
	i = global.clamp(parseInt(i), 0, 4);

	// placeholder for 0-1 curve result
	var outNormalized = 0;

	// apply correct curve
	switch(i){

		// linear
		case 0:
			outNormalized = t;
			break

		// sine in/out
		case 1:
			outNormalized = Math.pow( Math.sin((5*t)/Math.PI ), 2);
			break

		// quad in
		case 2:
			outNormalized = t*t;
			break

		// quad out
		case 3:
			outNormalized = -t*t + 2*t;
			break
	}

	// remap to start and end
	var out = outNormalized * (e-s) + s;
	return out;
}




global.degToRad = function(d){

	// check if float
	if(Number.isFinite(d)){

		return d * Math.PI/180;

	// else, assume vec3
	}else{

		var _x = d.x * Math.PI/180;
		var _y = d.y * Math.PI/180;
		var _z = d.z * Math.PI/180;
		return new vec3(_x, _y, _z);
	}
}




global.radToDeg = function(r){

	// check if float
	if(r.length === 1){

		return r * Math.PI/180;

	// else, assume vec3
	}else{

		var _x = r.x * 180/Math.PI;
		var _y = r.y * 180/Math.PI;
		var _z = r.z * 180/Math.PI;
		return new vec3(_x, _y, _z);
	}
}




global.rotationToEulerDeg = function(r){

	return global.radToDeg( r.toEulerAngles());
}




global.rotationFromEulerDeg = function(r){

	return quat.fromEulerVec( global.degToRad(r));
}




global.isInFront = function(objFront, objBehind){

	var frontPos = objFront.getTransform().getWorldPosition();
	var behindTransf = objBehind.getTransform();
	var behindPos = behindTransf.getWorldPosition();

	var target = new vec3(behindPos.x - frontPos.x,
						  behindPos.y - frontPos.y,
						  behindPos.z - frontPos.z);

	target = target.normalize();
	var dir = target.dot(behindTransf.forward);



	if(dir >= 0){

		return false;
	}else{

		return true;
	}
}




global.isInBox = function(obj, box){

	// lens studio box size
	var meshNormalize = 15.14;

	// get world bounds of collision box
	var collisionTransf = box.getTransform();
	var collisionScale = collisionTransf.getWorldScale();
	var collisionPos = collisionTransf.getWorldPosition();
	collisionPos.x /= meshNormalize;
	collisionPos.y /= meshNormalize;
	collisionPos.z /= meshNormalize;

	var xMin = collisionPos.x - collisionScale.x/2;
	var xMax = collisionPos.x + collisionScale.x/2;
	var yMin = collisionPos.y - collisionScale.y/2;
	var yMax = collisionPos.y + collisionScale.y/2;
	var zMin = collisionPos.z - collisionScale.z/2;
	var zMax = collisionPos.z + collisionScale.z/2;


	// get comparison pos
	var currPos = obj.getTransform().getWorldPosition();

	// normalise for box mesh scale
	currPos.x /= meshNormalize;
	currPos.y /= meshNormalize;
	currPos.z /= meshNormalize;

	// check if in bounds
	if(	(currPos.x < xMax && currPos.x > xMin) &&
		(currPos.y < yMax && currPos.y > yMin) &&
		(currPos.z < zMax && currPos.z > zMin) ){

		return true;
	}else{

		return false;
	}
}




global.HSVtoRGB = function(h, s, v){
	
	h = global.clamp(h, 0, 1);
	s = global.clamp(s, 0, 1);
	v = global.clamp(v, 0, 1);

	var r;
	var g;
	var b;

	var i = Math.floor(h * 6);
	var f = h * 6 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);

	switch (i % 6) {

		case 0: 
			r = v, g = t, b = p;
			break;

		case 1: 
			r = q, g = v, b = p;
			break;

		case 2: 
			r = p, g = v, b = t;
			break;

		case 3: 
			r = p, g = q, b = v;
			break;

		case 4: 
			r = t, g = p, b = v;
			break;

		case 5: 
			r = v, g = p, b = q;
			break;
	}


	return new vec3(r, g, b);
}




global.RGBtoHSV = function(rgb){

	var r = global.clamp(rgb.x, 0, 1);
	var g = global.clamp(rgb.y, 0, 1);
	var b = global.clamp(rgb.z, 0, 1);

	var v = Math.max(r, g, b)
	var n = v - Math.min(r,g,b);
	var h = n && ( (v == r) ? (g - b) / n : ( (v == g) ? 2 + (b - r) / n : 4 + (r - g) / n) );
	
	return new vec3(60 * (h < 0 ? h + 6 : h) / 360,
					v && n / v,
					v);
}




global.delayFunction = function(func, wait, args){

	const keepAlive = {

		toDo: function(){

			_args = args;
			func.apply(null, _args);
		}
	}

	var waitEvent = script.createEvent("DelayedCallbackEvent");
	waitEvent.bind( keepAlive.toDo.bind(keepAlive) );
	waitEvent.reset(wait);
}




global.instSound = function(audioAsset){

	function destroyAudioComponent(audioComp){

		audioComp.destroy();
	}


	var audioComp = script.getSceneObject().createComponent("Component.AudioComponent");
	audioComp.audioTrack = audioAsset;
	audioComp.play(1);
	global.delayFunction( destroyAudioComponent, audioComp.duration, [audioComp] );
}




global.clamp = function(v, low, high){

	return 	v < low	? low :
			v > high ? high :
			v;
}




global.isSnapCamera = function(deviceCameraTexture){

	var w = deviceCameraTexture.getWidth();
	var h = deviceCameraTexture.getHeight();

	return w > h;
}