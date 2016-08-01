#pragma strict


var linkedLight : Light;

function Update () {
    if(Input.GetKeyDown(KeyCode.F)){
        linkedLight.enabled = !linkedLight.enabled;
   }
}

function LightOff (){
	linkedLight.enabled = false;
}	

