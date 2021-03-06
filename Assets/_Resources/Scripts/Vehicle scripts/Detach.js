#pragma strict


var unparentWheels : GameObject[];
var hitPoints : float = 100;
var explosion : Transform;
var body : GameObject;
var trigger : GameObject;

function ApplyDamage (damage : float) {
	if (hitPoints <= 0.0)
		return;


	hitPoints -= damage;
	
	if (hitPoints <= 0.0) Detonate();
}


function Detonate () {
	
	var coms : Component[] = GetComponentsInChildren(MonoBehaviour);
	for (var b in coms) {
		var p : MonoBehaviour = b as MonoBehaviour;
		if (p)
			p.enabled = false;
	}
	trigger.SetActive (false);
	for(var i : int = 0; i < unparentWheels.length; i++){
		unparentWheels[i].transform.parent = null;
		unparentWheels[i].AddComponent.<MeshCollider>();
		unparentWheels[i].GetComponent(MeshCollider).convex = true;
		unparentWheels[i].AddComponent.<Rigidbody>();
		unparentWheels[i].GetComponent(Rigidbody).mass = 12;
		unparentWheels[i].transform.position.y += 1;
		
	}
	Instantiate(explosion, body.transform.position, body.transform.rotation);
	transform.DetachChildren();
}
