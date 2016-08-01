#pragma strict


function OnTriggerEnter (other : Collider) {
	if(other.CompareTag("Player"))
		other.SendMessage("PlayerInWater", transform.position.y, SendMessageOptions.DontRequireReceiver);
}