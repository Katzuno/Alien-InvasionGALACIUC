#pragma strict


var returnSpeed : float = 2.0;
var myTransform : Transform;

function LateUpdate () {
	myTransform.localRotation = Quaternion.Slerp(myTransform.localRotation, Quaternion.identity, Time.deltaTime * returnSpeed);
}