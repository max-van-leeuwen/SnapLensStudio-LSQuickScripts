// Max van Leeuwen
// maxvanleeuwen.com, ig @max.van.leeuwen, twitter @maksvanleeuwen
//
// setRotation
// Sets the rotation of the current object based on human-readable user input (degrees in Euler-rotation, instead of quaternions).



//@input vec3 rotation



// get transform
var transf = script.getSceneObject().getTransform();

// set new rotation
transf.setLocalRotation( global.rotationFromEulerDeg( script.rotation ));