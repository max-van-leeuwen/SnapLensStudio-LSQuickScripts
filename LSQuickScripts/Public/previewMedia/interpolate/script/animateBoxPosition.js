// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// animateBoxPosition
// Moves box from -z to z on a ping pong-style loop, using the interpolate function.




//@input float distance
//@input float speed
//@input string inputMode {"widget":"combobox", "values":[{"label":"0: linear", "value":"0"}, {"label":"1: sine", "value":"1"}, {"label":"2: quadratic in", "value":"2"}, {"label":"3: quadratic out", "value":"3"}]}




// animation ratio
var anim = 0;
var forward = true;

// get transform
var transf = script.getSceneObject().getTransform();




function onUpdate(){

	// increase animation (or decrease, if going back to 0)
	anim = anim + (getDeltaTime() * script.speed * (forward ? 1 : -1));


	//  ping pong
	if(anim > 1){

		forward = false;
		anim = 1;

	}else if(anim < 0){

		anim = 0;
		forward = true;

	}


	var z = global.interp(anim, 0, script.distance, script.inputMode);
	var newPos = new vec3(0, 0, z);
	transf.setWorldPosition(newPos);
}

var onUpdateEvent = script.createEvent("UpdateEvent");
onUpdateEvent.bind(onUpdate);