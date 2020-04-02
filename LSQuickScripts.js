// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// LSQuickScripts
// Global functions (can be called from any script in the project), to make some everyday tasks in Lens Studio easier to do.
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
// Returns an interpolated 0-1 value at time t (argument 0, a number between 0 and 1) between start and end values (agrument 1, 2) using one of the following specified curves (argument 3):
//	0: linear (like a lerp function)
//	1: sine (slow start, fast middle and slow end)
//	2: quadratic in (starts slow, accelerates)
//	3: quadratic out (starts fast, slows down)
//
// Example: global.interp(x, 10, 15, 3);
// This will return the interpolated value between 10 and 15 at x, using a quadratic out-curve.
//
//
// global.degToRad( float or vec3 ) -> float or vec3
// Converts float or vec3 of degrees to float or vec3 of radians.
//
//
// global.radToDeg( float or vec3 ) -> float or vec3
// Converts float or vec3 of radians to float or vec3 of degrees.
//
//
// global.rotationToEulerDeg( quat ) -> vec3
// Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).
//
//
// global.rotationFromEulerDeg( vec3 ) -> quat
// Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in s etWorldRotation()).
//
//
// global.isInFront( SceneObject, SceneObject ) -> bool
// Checks if object (argument 0) is in front of another object (argument 1).
//
//
// global.isInBox( SceneObject, SceneObject ) -> bool
// Checks if an object (argument 1) is within the boundaries of a Box object (argument 0, no rotation).
//
//
// global.HSVtoRGB( float, float, float ) -> vec3
// Returns the RGB colour for a given Hue (argument 0), Saturation (argument 1), and Value (argument 2). All inputs and outputs are 0-1.
//
//
// global.RGBtoHSV( vec3 ) -> vec3
// Returns the Hue, Saturation, and Value values for the specified colour. Inputs and outputs are 0-1.
//
//
// /////




//@ui {"widget":"label", "label":"LSQuickScripts v0.1"}
//@ui {"widget":"label", "label":"By Max van Leeuwen"}
//@ui {"widget":"label", "label":"-"}
//@ui {"widget":"label", "label":"Leave at 'Initialized'. For help, see:"}
//@ui {"widget":"label", "label":"maxvanleeuwen.com/downloads/#LSQuickScripts"}




global.interp = function(t, s, e, i){

	// clamp t 0-1
	t = clamp(t, 0, 1);

	// check i value
	i = clamp(parseInt(i), 0, 4);

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
	
	h = clamp(h, 0, 1);
	s = clamp(s, 0, 1);
	v = clamp(v, 0, 1);

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

	var r = clamp(rgb.x, 0, 1);
	var g = clamp(rgb.y, 0, 1);
	var b = clamp(rgb.z, 0, 1);

	var v = Math.max(r, g, b)
	var n = v - Math.min(r,g,b);
	var h = n && ( (v == r) ? (g - b) / n : ( (v == g) ? 2 + (b - r) / n : 4 + (r - g) / n) );
	
	return new vec3(60 * (h < 0 ? h + 6 : h) / 360,
					v && n / v,
					v);
}




// function to clamp values
function clamp(v, low, high){

	return 	v < low	? low :
			v > high ? high :
			v;
}