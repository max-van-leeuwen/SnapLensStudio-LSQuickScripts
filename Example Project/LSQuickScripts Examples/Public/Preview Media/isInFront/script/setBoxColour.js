// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// setBoxColour
// Sets the Material on this object to one of two colours, based on whether the object is in front of or behind the specified object.




//@input SceneObject compareTo

//@input vec3 frontColour {"widget":"color"}
//@input vec3 behindColour {"widget":"color"}




var mat = script.getSceneObject().getComponent("Component.RenderMeshVisual").getMaterial(0);




function onUpdate(){

	if( global.isInFront(script.getSceneObject(), script.compareTo) ){

		mat.mainPass.colour = script.frontColour;
	}else{

		mat.mainPass.colour = script.behindColour;
	}
}

var onUpdateEvent = script.createEvent("UpdateEvent");
onUpdateEvent.bind(onUpdate);