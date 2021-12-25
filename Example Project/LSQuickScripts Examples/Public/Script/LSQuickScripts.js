// Max van Leeuwen
// LSQuickScripts - A cheat sheet for handy Lens Studio-ready functions I often use.
// 
// maxvanleeuwen.com
// twitter 	@maksvanleeuwen
// ig 		@max.van.leeuwen
//
// github.com/max-van-leeuwen/SnapLensStudio-LSQuickScripts
//
//
//
//
//
// ADDITIONAL CREDITS:
// -------------------
// Snap Inc.
//
//
// Tween.js - Licensed under the MIT license
// https://github.com/tweenjs/tween.js
// See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
// Thank you all, you're awesome!
// -------------------
//
//
//
//
// 
// CONTENTS:
// --------------------
//
//
// global.lsqs : Script Component
//  Returns the Script component this script is on, useful to manage events created by this script.
//
//
// -
//
//
// global.LS_BOX_SCALE : Number
// 	Constant value for default box mesh scale in Lens Studio.
//
//
// -
//
//
// global.interp(t [Number], startValue [Number], endValue [Number], easing (optional) [string], type (optional) [string]) : Number
// 	Returns the value of t interpolated using Tween functions between the start and end values. Set the easing function and type (optional) by string:
// 
// 		Easing:
// 			Linear (default)
// 			Quadratic
// 			Cubic
// 			Quartic
// 			Quintic
// 			Sinusoidal
// 			Exponential
// 			Circular
// 			Elastic
// 			Back
// 			Bounce
//
// 		Type:
// 			InOut (default)
// 			In
// 			Out
//
// 		Examples:
// 			global.interp(0.1, 0, 1, "Elastic", "In");
// 			global.interp(x, -5, 5, "Cubic");
//
//
// -
//
//
// global.degToRad(degrees [Number/vec3]) : Number/vec3
// 	Converts Number or vec3 of degrees to Number or vec3 of radians.
//
//
// global.radToDeg(radians [Number/vec3]) : Number/vec3
// 	Converts Number or vec3 of radians to Number or vec3 of degrees.
//
//
// -
//
//
// global.rotationToEulerDeg(rotation [quat]) : vec3
// 	Converts the quaternion rotation of a transform (as returned using getWorldRotation()) to a human-readable Euler variant (as seen in the Inspector).
//
//
// global.rotationFromEulerDeg(rotation [vec3]) : quat
// 	Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).
//
//
// -
//
//
// global.isInFront(objFront[SceneObject], objBehind [SceneObject] ) : bool
// 	Checks if an object (arg 0) is in front of another object (arg 1).
//
//
// global.isInBox(object [SceneObject], box [SceneObject]) : bool
// 	Checks if an object (arg 0) is within the boundaries of a default Lens Studio box mesh (arg 1).
//
//
// -
//
//
// global.HSVtoRGB(h [Number], s [Number], v [Number]) : vec3
// 	Returns the RGB color for a Hue (arg 0), Saturation (arg 1), and Value (arg 2). All inputs and outputs are in range 0-1.
//
//
// global.RGBtoHSV(rgb [vec3]) : vec3
// 	Returns the Hue, Saturation, and Value values for the specified color. Inputs and outputs are in range 0-1.
//
//
// -
//
//
// global.delay(func [function], wait (optional) [Number], args (optional) [array]) : DelayedCallbackEvent
// 	Executes a function after a given amount of frames (whole number) with arguments. If no frame count is given, the function will execute on the next frame.
// 	Returns the event of type DelayedCallbackEvent (if wait > 0). Useful, for example, when cancelling it on runtime using [DelayedCallbackEvent].enabled = false.
//
// 		Examples:
// 			var delayedEvent = global.delay(doAfterTwoFrames, 2, ["argument 1", "argument 2"]);
//			var delayedEvent = global.delay(doNextFrame);
//
//
// global.delaySeconds(func [function], wait [Number], args (optional) [array]) : DelayedCallbackEvent
// 	Runs a function after an amount of seconds with all arguments in the array. If no wait time or a wait time of zero is given, the function will execute immediately.
// 	Returns the event of type DelayedCallbackEvent. Useful, for example, when cancelling it on runtime using [DelayedCallbackEvent].enabled = false.
//
// 		Examples:
// 			var delayedEvent = global.delaySeconds(doAfterTwoSeconds, 2, ["argument 1", "argument 2"]);
//
//
// -
//
//
// global.instSound(audioAsset [Asset.AudioTrackAsset], fadeIn (optional) [Number], fadeOut (optional) [Number], offset (optional) [Number], mixToSnap (optional) [bool]) : AudioComponent
// 	Plays a sound on a newly instantiated temporary sound component, which allows for multiple plays simultaneously without the audio clipping when it restarts. Instances are removed when done.
// 	Returns the AudioComponent.
//
//
// -
//
//
// global.clamp(value [Number], low [Number], high [Number]) : Number
// 	Returns the clamped value (arg 0) between the lowest (arg 1) and highest (arg 2) values.
//
//
// -
//
//
// global.isSnapCamera() : bool
// 	Returns true if lens is running in Snap Camera.
//
//
// -
//
//
// global.randSeed(seed [int]) : Number
// 	Returns a random value (0-1) based on the input seed. Uses mulberry32.
//
//
// -
//
//
// global.remap(value [Number], low1 [Number], high1 [Number], low2 [Number], high2 [Number]) : Number
// 	Returns value remapped from range low1-high1 to range low2-high2.
//
//
// -
//
//
// global.encodeFloat(data [Number], min [Number], max [Number]) : vec4
// 	Equivalent of the 'Pack' node in the material graph editor (32-bits).
//
//
// global.decodeToFloat(encoded data [vec4], min [Number], max [Number]) : Number
// 	Equivalent of the 'Unpack' node in the material graph editor (32-bits).
//
//
// -
//
//
// global.screenToScrTransform(screenPos [vec2]) : vec2
// 	Returns ScreenTransform anchor center position (range -1 - 1) from screen coordinates (0-1, inversed y-axis).
//
//
// global.scrTransformToScreen(scrTransfCenter [vec2]) : vec2
// 	Returns screen coordinates (range 0-1) of Screen Transform anchors center. Inverse of screenToScrTransform().
//
//
// -
//
//
// global.worldMeshClassify() : string
// 	Returns the name of the world mesh classification index.
//
//		Examples:
//			global.worldMeshClassify(2) : "Floor"
//
//
// -
//
//
// global.concatArrays(array [any], array [any]) : array
// 	Concatinates two arrays (of same type) and returns the new one.
//
//
// global.shuffleArray(array [array]) : array
// 	Returns a randomly shuffled copy of the array.
//
//
// -
//
//
// global.rollingAverage(oldVal [Numver], oldSampleCount [Number], addedVal [Number]) : Number
// 	Returns a new value that is the average of oldVal and addedVal, where oldVal is already an average of oldSampleCount amount of numbers.
// 	Make sure to increase the counter passed into oldSampleCount after getting this result, so it can give reliable results again at a later time.
//
//		Examples:
//			var avg;
//			var samples;
//			var controlAvg;
//			for(var i = 0; i < 100; i++){
//				var v = Math.random();
//				if(avg === undefined){
//					samples = 1;
//					avg = v;
//				}else{
//					samples++;
//					avg = global.rollingAverage(avg, samples, v);
//				}
//			}
//
//			avg -> ~0.5
//			
//
// -
//
//
// global.beginStopwatch()
// 	Starts precise time measurement.
//
//
// global.endStopwatch(showAverage [bool])
// 	Ends stopwatch started with beginStopwatch(), prints precise time difference in seconds.
// 	If showAverage is true, the print will also include an average of all the stopwatch results accumulated since the last resetStopwatchAverage().
//
//
// global.resetStopwatchAverage()
// 	Tells stopwatch to start recording outputs on endStopwatch() from this point forward, getting the average stopwatch result (the longer it runs, the more precise it gets).
// 	Average is printed if showAverage=true in endStopwatch().
//
//
// -
//
//
// global.setAllChildrenToLayer(sceneObj [sceneObject], layer [int])
// 	Sets the sceneObject and all of its child objects and sub-child objects to render layer by index.
//
//
// -
//
//
// global.rotateCoords(point [vec2], pivot [vec2], angle [Number]) : vec2
// 	Rotate a 2D point around a pivot with specified angle (radians). Returns new point.
//
//
// -
//
//
// global.matchYAxis(followTransform [transform]) : quat
// 	Returns a rotation which matches the world up-axis rotation of the transform. Useful for making minimaps of 3D scenes.
//
//
// -
//
//
// global.randomRadius(v [Number], radius [Number]) : Number
//	Returns a random number near v. The radius it can return is a multiplier of this value.
//
// 		Example:
//			global.randomRadius(10, 1) : Any number in range [5, 15).
//
//
// -
//
//
// global.circularDistance(a [Number], b [Number], mod [Number]) : Number
// 	Returns the closest distance from a to b if the number line of length mod would be a circle.
//
//
//
// -
//
//
// global.measureWorldPos(screenPos [vec2], region [Component.ScreenTransform], cam [Component.Camera], dist [Number]) : vec3
// 	Returns the world position of a screen space coordinate within a screen transform component (-1 - 1).
//	Useful for measuring out where to place a 3D model so it won't overlap with Snapchat's UI.
//
//
//
// -
//
//
// global.getAllComponents(componentNames [String Array], startObj [SceneObject]) : Array (Components)
// 	Returns an object containing lists of all components of types componentNames, also on child objects. If no startObj is given, it searches the whole scene.
//
//
// 		Example:
//			var components = global.getAllComponents(["Component.VFXComponent", "Component.AudioComponent"])
//				components = { "Component.VFXComponent"   : [ARRAY OF ALL VFX COMPONENTS IN SCENE],
//							   "Component.AudioComponent" : [ARRAY OF ALL AUDIO COMPONENTS IN SCENE]};
//
//
//
// -
//
//
// global.fadeProperty(func [Function], from [Number], to [Number], duration [Number], callback [Function]) : Array (Components)
// 	Plays a simple cubic in/out animation, calling function func with argument from-to. At the end, it calls the callback function (optional).
//
//
//
// --------------------




//@ui {"widget":"label", "label":"LSQuickScripts v1.1"}
//@ui {"widget":"label", "label":"By Max van Leeuwen"}
//@ui {"widget":"label", "label":"-"}
//@ui {"widget":"label", "label":"Leave at 'On Awake'. For help, see:"}
//@ui {"widget":"label", "label":"github.com/max-van-leeuwen/SnapLensStudio-LSQuickScripts"}




// access for events
global.lsqs = script;




// box mesh world scale
global.LS_BOX_SCALE = 15.14;




// --- interpolate/Tween functions
//
// Tween.js - Licensed under the MIT license
// https://github.com/tweenjs/tween.js
// See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
// 

var easingFunctions = {
	Linear: {
		In: function (k) {
			return k;
		},
		Out: function (k) {
			return k;
		},
		InOut: function (k) {
			return k;
		}
	},
	Quadratic: {
		In: function (k) {
			return k * k;
		},
		Out: function (k) {
			return k * (2 - k);
		},
		InOut: function (k) {
			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}
			return - 0.5 * (--k * (k - 2) - 1);
		}
	},
	Cubic: {
		In: function (k) {
			return k * k * k;
		},
		Out: function (k) {
			return --k * k * k + 1;
		},
		InOut: function (k) {
			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}
			return 0.5 * ((k -= 2) * k * k + 2);
		}
	},
	Quartic: {
		In: function (k) {
			return k * k * k * k;
		},
		Out: function (k) {
			return 1 - (--k * k * k * k);
		},
		InOut: function (k) {
			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}
			return - 0.5 * ((k -= 2) * k * k * k - 2);
		}
	},
	Quintic: {
		In: function (k) {
			return k * k * k * k * k;
		},
		Out: function (k) {
			return --k * k * k * k * k + 1;
		},
		InOut: function (k) {
			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}
			return 0.5 * ((k -= 2) * k * k * k * k + 2);
		}
	},
	Sinusoidal: {
		In: function (k) {
			return 1 - Math.cos(k * Math.PI / 2);
		},
		Out: function (k) {
			return Math.sin(k * Math.PI / 2);
		},
		InOut: function (k) {
			return 0.5 * (1 - Math.cos(Math.PI * k));
		}
	},
	Exponential: {
		In: function (k) {
			return k === 0 ? 0 : Math.pow(1024, k - 1);
		},
		Out: function (k) {
			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
		},
		InOut: function (k) {
			if (k === 0) {
				return 0;
			}
			if (k === 1) {
				return 1;
			}
			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}
			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
		}
	},
	Circular: {
		In: function (k) {
			return 1 - Math.sqrt(1 - k * k);
		},
		Out: function (k) {
			return Math.sqrt(1 - (--k * k));
		},
		InOut: function (k) {
			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}
			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		}
	},
	Elastic: {
		In: function (k) {
			if (k === 0) {
				return 0;
			}
			if (k === 1) {
				return 1;
			}
			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
		},
		Out: function (k) {
			if (k === 0) {
				return 0;
			}
			if (k === 1) {
				return 1;
			}
			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
		},
		InOut: function (k) {
			if (k === 0) {
				return 0;
			}
			if (k === 1) {
				return 1;
			}
			k *= 2;
			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}
			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
		}
	},
	Back: {
		In: function (k) {
			var s = 1.70158;
			return k * k * ((s + 1) * k - s);
		},
		Out: function (k) {
			var s = 1.70158;
			return --k * k * ((s + 1) * k + s) + 1;
		},
		InOut: function (k) {
			var s = 1.70158 * 1.525;
			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}
			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		}
	},
	Bounce: {
		In: function (k) {
			return 1 - easingFunctions.Bounce.Out(1 - k);
		},
		Out: function (k) {
			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}
		},
		InOut: function (k) {
			if (k < 0.5) {
				return easingFunctions.Bounce.In(k * 2) * 0.5;
			}
			return easingFunctions.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
		}
	}
};

// --- end of interpolate/Tween functions




global.interp = function(t, startValue, endValue, easing, type){
	// don't overshoot
	t = global.clamp(t, 0, 1);

	// set defaults
	if(typeof easing === 'undefined'){
		easing = "Linear";
	}
	if(typeof type === 'undefined'){
		type = "InOut";
	}

	// get easing function + type
	var easingFunction = easingFunctions[easing];
	if(typeof easingFunction === 'undefined'){
		throw new Error("Easing function: '" + easing + "' does not exist!");
	}
	var easingType = easingFunction[type];
	if(typeof easingType === 'undefined'){
		throw new Error("Easing type: '" + type + "' does not exist!");
	}

	// remap
	return easingType(t) * (endValue-startValue) + startValue;
}




global.degToRad = function(degrees){
	if(typeof degrees === 'number'){
		return degrees * Math.PI/180;
	// assume vec3
	}else{
		var _x = degrees.x * Math.PI/180;
		var _y = degrees.y * Math.PI/180;
		var _z = degrees.z * Math.PI/180;
		return new vec3(_x, _y, _z);
	}
}




global.radToDeg = function(radians){
	if(typeof radians === 'number'){
		return radians * 180/Math.PI;
	// assume vec3
	}else{
		var _x = radians.x * 180/Math.PI;
		var _y = radians.y * 180/Math.PI;
		var _z = radians.z * 180/Math.PI;
		return new vec3(_x, _y, _z);
	}
}




global.rotationToEulerDeg = function(rotation){
	return global.radToDeg( rotation.toEulerAngles());
}




global.rotationFromEulerDeg = function(rotation){
	return quat.fromEulerVec( global.degToRad(rotation));
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
	return dir < 0;
}




global.isInBox = function(obj, box){
	// lens studio box size
	var meshNormalize = global.LS_BOX_SCALE;

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

	// normalize for box mesh scale
	currPos.x /= meshNormalize;
	currPos.y /= meshNormalize;
	currPos.z /= meshNormalize;

	// check if in bounds
	return ((currPos.x < xMax && currPos.x > xMin) &&
			(currPos.y < yMax && currPos.y > yMin) &&
			(currPos.z < zMax && currPos.z > zMin) );
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
	
	return new vec3( 60 * (h < 0 ? h + 6 : h) / 360,
					 v && n / v,
					 v);
}




global.delay = function(func, wait, args){
	if(!wait && wait != 0){
		wait = 1;
	}
	if(!Number.isInteger(wait)){
		throw new Error("delay wait argument not integer (" + wait.toString() + ") for function: " + func.name);
	}
	const keepAlive = {
		exec: function(){
			_args = args;
			func.apply(null, _args);
		}
	}
	function onUpdate(){
		if(wait <= 0){
			script.removeEvent(waitEvent);
			keepAlive.exec();
		}
		wait--;
	}
	if(wait === 0){
		keepAlive.exec();
	}else{
		var waitEvent = script.createEvent("UpdateEvent");
		waitEvent.bind(onUpdate);
		return waitEvent;
	}
}




global.delaySeconds = function(func, wait, args){
	if(!wait){
		wait = 0;
	}
	const keepAlive = {
		exec: function(){
			_args = args;
			func.apply(null, _args);
		}
	}
	if(wait === 0){
		keepAlive.exec();
		return null;
	}else{
		var waitEvent = script.createEvent("DelayedCallbackEvent");
		waitEvent.bind(keepAlive.exec.bind(keepAlive));
		waitEvent.reset(wait);
		return waitEvent;
	}
}




global.instSound = function(audioAsset, fadeIn, fadeOut, offset, mixToSnap){
	function destroyAudioComponent(audioComp){
		audioComp.destroy();
	}
	var audioComp = script.getSceneObject().createComponent("Component.AudioComponent");
	if(mixToSnap) audioComp.mixToSnap = true;
	audioComp.audioTrack = audioAsset;
	if(!fadeIn){
		fadeIn = 0;
	}
	if(!fadeOut){
		fadeOut = 0;
	}
	audioComp.fadeInTime = fadeIn;
	audioComp.fadeOutTime = fadeOut;
	audioComp.play(1);
	if(offset){
		audioComp.position = offset;
		audioComp.pause();
		audioComp.resume();
	}
	global.delaySeconds( destroyAudioComponent, audioComp.duration, [audioComp] );
	return audioComp;
}




global.clamp = function(value, low, high){
	return Math.max(Math.min(value, Math.max(low, high)), Math.min(low, high));
}




global.isSnapCamera = function(){
	return global.deviceInfoSystem.getTargetOS() === 'macos' || global.deviceInfoSystem.getTargetOS() === 'win';
}




global.randSeed = function(a){
	var t = a += 0x6D2B79F5;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
}




global.remap = function(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}




// --- material graph pack/unpack functions
//
// Snap - LiDAR enabled template, Instanced Object Controller - v0.0.1
//

const ENCODE_MAX_VALUE = 0.99;
const MIN_POS_BITS_TO_FLOAT_CONSTANT = new vec4(1.0,1.0/255.0,1.0/65025.0,1.0/16581375.0);

function fract(float) {
	var n = Math.abs(float); 
	var decimal = n - Math.floor(n);
	return decimal;
}

function floatToBits(float) {
	var x = fract(1 * float),
		y = fract(255 * float),
		z = fract(65025 * float),
		w = fract(16581375 * float);
	
	var a = y / 255,
		b = z / 255,
		c = w / 255,
		d = 0;

	return new vec4(x-a, y-b, z-c, w-d);
}

function bitsToFloat(raw) {
	var v = raw;
	
	if (raw.w === undefined) {
		var a = [raw.x,raw.y, raw.z].map(function(v) {
			return Math.floor(v * 65025 + 0.5) /65025; 
		});
		v = new vec4(a[0], a[1], a[2], 0);
	}

	return v.dot(MIN_POS_BITS_TO_FLOAT_CONSTANT);
}

global.encodeFloat = function(value, min, max) {
	return floatToBits(global.remap(global.clamp(value, min, max), min, max, 0.0, ENCODE_MAX_VALUE));
}

global.decodeToFloat = function(value, min, max) {
	return global.remap(bitsToFloat(value), 0.0, ENCODE_MAX_VALUE, min, max);
}

// --- end of material graph pack/unpack functions




global.screenToScrTransform = function(screenPos){
	return new vec2( (screenPos.x - .5)*2,
					 (1-screenPos.y - .5)*2);
}




global.scrTransformToScreen = function(scrTransfCenter){
	return new vec2( scrTransfCenter.x/2 + .5,
					 1-(scrTransfCenter.y/2 + .5) );
}




global.worldMeshClassify = function(n){
	switch (n){
		case 0:
			return "None";
		case 1:
			return "Wall";
		case 2:
			return "Floor";
		case 3:
			return "Ceiling";
		case 4:
			return "Table";
		case 5:
			return "Seat";
		case 6:
			return "Window";
		case 7:
			return "Door";
		default:
			return null;
	}
}




global.concatArrays = function(a, b) {
	var c = new (a.constructor)(a.length + b.length);
	c.set(a, 0);
	c.set(b, a.length);
	return c;
}




global.shuffleArray = function(array) {
	var curIndex = array.length;
	var tmpValue;
	var rndIndex;
	while (0 !== curIndex) {
		rndIndex = Math.floor(Math.random() * curIndex);
		curIndex -= 1;
		tmpValue = array[curIndex];
		array[curIndex] = array[rndIndex];
		array[rndIndex] = tmpValue;
	}
	return array;
}




global.rollingAverage = function(oldVal, oldSampleCount, addedVal){
	var newVal = ((oldVal*(oldSampleCount-1)) + addedVal)/oldSampleCount;
	return newVal
}




// --- stopwatch functions

var stopwatchStart;
var stopwatchAVG;
var stopwatchAVGlength;

global.beginStopwatch = function(){
	stopwatchStart = performance.now();
}

global.endStopwatch = function(showAverage){
	var diff = (performance.now() - stopwatchStart)/1000; // to seconds

	var avg;
	if(showAverage){
		if(stopwatchAVG === null){
			stopwatchAVGlength = 1;
			stopwatchAVG = diff;
		}else{
			stopwatchAVGlength++;
			stopwatchAVG += (diff-stopwatchAVG)/stopwatchAVGlength; // continuous average
		}
		avg = stopwatchAVG.toString();
	}

	var line = showAverage ? diff.toString() + "\t\t" + avg : diff.toString();
	print(line);
}

global.resetStopwatchAverage = function(){
	stopwatchAVG = null;
	stopwatchAVGlength = null;
}

// --- end of stopwatch functions




global.setAllChildrenToLayer = function(sceneObj, layer) {
	for (var i = 0; i < sceneObj.getChildrenCount(); i++) {
		sceneObj.getChild(i).layer = LayerSet.fromNumber(layer);
		global.setAllChildrenToLayer(sceneObj.getChild(i), layer);
	}
};




global.rotateCoords = function(point, pivot, angle){
	var _x = Math.cos(angle) * (point.x-pivot.x) - Math.sin(angle) * (point.y-pivot.y) + pivot.x;
	var _y = Math.sin(angle) * (point.x-pivot.x) + Math.cos(angle) * (point.y-pivot.y) + pivot.y;
	return new vec2(_x, _y);
}




global.matchYAxis = function(followTransform){
	var fwd = followTransform.forward;
	var angle = Math.atan2(fwd.x, fwd.z);
	var rot = quat.fromEulerAngles(0, angle, 0);
	return rot;
}




global.randomRadius = function(v, radius){
	var rand = Math.random() * (radius*v) - (radius*v)/2;
	return v+rand;
}




global.circularDistance = function(a, b, mod){
	function absMod(x, m){
		var mAbs = Math.abs(m);
		var v = x % mAbs;
		if(v < 0){
			return v+mAbs;
		}else{
			return v;
		}
	}
	var m1 = absMod(a-b, mod);
	var m2 = absMod(b-a, mod);
	return Math.min(m1, m2);
}




global.measureWorldPos = function(screenPos, region, cam, dist){
	var pos2D = region.localPointToScreenPoint(screenPos);
	return cam.screenSpaceToWorldSpace(pos2D, dist);
}




global.getAllComponents = function(componentNames, startObj){
    var found = {};
	for(var i = 0; i < componentNames.length; i++){
		var componentName = componentNames[i];
		found[componentName] = []; // initialize arrays per component
	}

    function scanSceneObject(obj){
		for(var i = 0; i < componentNames.length; i++){
			var componentName = componentNames[i];
			var comps = obj.getComponents(componentName);
			if(comps.length > 0){
				for(var j = 0; j < comps.length; j++){ // add all to list
					found[componentName].push(comps[j]);
				}
			}
		}
    }

    function iterateObj(obj){
        for(var i = 0; i < obj.getChildrenCount(); i++){
            var child = obj.getChild(i);
            scanSceneObject(child)
			iterateObj(child);
        }
    }

	if(startObj){ // start at specific object
		scanSceneObject(startObj);
		iterateObj(startObj);
	}else{ // go through whole scene
		var rootObjectsCount = global.scene.getRootObjectsCount();
		for(var i = 0; i < rootObjectsCount; i++){
			var rootObj = global.scene.getRootObject(i);
			scanSceneObject(rootObj);
			iterateObj(rootObj);
		}
	}
    
    return found;
}




global.fadeProperty = function(func, from, to, duration, callback){
	var animEvent;
	function fadeAnim(){
		var easeFunction = "Cubic";		// easing function (using Tween functions)
		var easeType = "InOut";			// easing type ("In", "Out", "InOut")

		function setValue(v){
			func(v);
		}

		var anim = 0;
		function animation(){
			anim += getDeltaTime()/duration;
			var v = global.interp(anim, from, to, easeFunction, easeType);
			setValue(v);
			if(anim > 1){
				script.removeEvent(animEvent);
				if(callback) callback();
			}
		}
		animEvent = script.createEvent("UpdateEvent");
		animEvent.bind(animation);
	}

	fadeAnim();
}