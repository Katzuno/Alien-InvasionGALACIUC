#pragma strict

var GO : GameObject;

function ApplyDamage (s : float){
	Action ();
}

function Action(){
	GO.SendMessage("Action", SendMessageOptions.DontRequireReceiver);
}