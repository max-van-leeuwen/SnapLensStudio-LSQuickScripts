// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// setPositionColour
// Sets the Material on this object to one of two colours, based on whether the object is in the specified box boundaries or not.




//@input SceneObject box

//@input vec3 inColour {"widget":"color"}
//@input vec3 outColour {"widget":"color"}




var mat = script.getSceneObject().getComponent("Component.RenderMeshVisual").getMaterial(0);




function onUpdate(){

	if( global.isInBox(script.getSceneObject(), script.box) ){

		mat.mainPass.colour = script.inColour;
	}else{

		mat.mainPass.colour = script.outColour;
	}
}

var onUpdateEvent = script.createEvent("UpdateEvent");
onUpdateEvent.bind(onUpdate);