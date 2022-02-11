// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// Moves object from -z to z on a ping pong-loop, using interp().



//@input float distance
//@input float speed
//@input string easingFunction = "Cubic" {"widget":"combobox", "values":[{"label":"Linear", "value":"Linear"}, {"label":"Quadratic", "value":"Quadratic"}, {"label":"Cubic", "value":"Cubic"}, {"label":"Quartic", "value":"Quartic"}, {"label":"Quintic", "value":"Quintic"}, {"label":"Sinusoidal", "value":"Sinusoidal"}, {"label":"Exponential", "value":"Exponential"}, {"label":"Circular", "value":"Circular"}, {"label":"Elastic", "value":"Elastic"}, {"label":"Back", "value":"Back"}, {"label":"Bounce", "value":"Bounce"}]}
//@input string easingType = "InOut" {"widget":"combobox", "values":[{"label":"In", "value":"In"}, {"label":"Out", "value":"Out"}, {"label":"InOut", "value":"InOut"}]}



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

	var z = global.interp(anim, -script.distance/2, script.distance/2, script.easingFunction, script.easingType);
	var newPos = new vec3(0, 0, z);
	transf.setWorldPosition(newPos);
}
var onUpdateEvent = script.createEvent("UpdateEvent");
onUpdateEvent.bind(onUpdate);