#pragma strict

var explosionRadius : float = 5.0;
var explosionPower : float = 10.0;
var explosionDamage : float = 100.0;
var explosionTimeout : float = 2.0;
var explosionSounds : AudioClip[];
var aSource : AudioSource;

function Start () {
	
	var explosionPosition : Vector3 = transform.position;


	var colliders : Collider[] = Physics.OverlapSphere (explosionPosition, explosionRadius);
	for (var hit in colliders) {
	
		var closestPoint : Vector3 = hit.ClosestPointOnBounds(explosionPosition);
		var distance : float = Vector3.Distance(closestPoint, explosionPosition);

		
		var hitPoints : float = 1.0 - Mathf.Clamp01(distance / explosionRadius);
		hitPoints *= explosionDamage;


		hit.SendMessageUpwards("ApplyDamage", hitPoints, SendMessageOptions.DontRequireReceiver);
		hit.SendMessageUpwards("PlayerDamage", hitPoints, SendMessageOptions.DontRequireReceiver);
		hit.SendMessageUpwards("Shake", hitPoints, SendMessageOptions.DontRequireReceiver);
	}


	colliders = Physics.OverlapSphere (explosionPosition, explosionRadius);
	for (var hit in colliders) {
		if (hit.GetComponent.<Rigidbody>())
			hit.GetComponent.<Rigidbody>().AddExplosionForce(explosionPower, explosionPosition, explosionRadius, 3.0);
	}
	
	PlaySounds();
}

function PlaySounds () {
	if(explosionSounds.length > 0){
		aSource.clip = explosionSounds[Random.Range(0, explosionSounds.length)];
		aSource.Play();
	}
	
	Destroy (gameObject, explosionTimeout);
}	