// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// Sets the colour of the Material on this object according to HSV values.



//@input bool animate
//@input float Speed
//@input float Hue {"showIf":"animate", "showIfValue":"false"}
//@input float Saturation
//@input float Value



// get material
var mat = script.getSceneObject().getComponent("Component.RenderMeshVisual").getMaterial(0);

// animation
var anim = 0;



function onUpdate(){
	var h = script.Hue;
	var s = script.Saturation;
	var v = script.Value;

	if(script.animate){
		// increase animation value, go back to 0 if over 1
		anim += getDeltaTime()*script.Speed;
		anim = anim % 1;

		// override hue with 0-1 value
		h = anim;
	}

	// set material colour
	mat.mainPass.colour = global.HSVtoRGB(h, s, v);
}
var onUpdateEvent = script.createEvent("UpdateEvent");
onUpdateEvent.bind(onUpdate);