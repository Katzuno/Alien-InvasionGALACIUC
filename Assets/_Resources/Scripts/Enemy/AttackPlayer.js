#pragma strict
/*
using UnityEngine;
using System.Collections;

public class AttackPlayer : MonoBehaviour {

    public Transform player;
	// Use this for initialization
	void Start () {
	    
	}
	
	// Update is called once per frame
	void Update () {
        transform.LookAt(player);
        transform.position = Vector3.MoveTowards(transform.position, player.position, 2 * Time.deltaTime);

	}
    void OnTriggerEnter (Collider other)
    {
        if (other.GetComponent<Collider>().name == "Player")
        {
            other.GetComponent<HealthScript>().PlayerDamage
        }
    }
}

*/
private var player : Transform;
public var mobDmg : int;

//
function Start () {
    player = GameObject.Find("Player").GetComponent(Transform);
    
}
private var HS : HealthScript = player.GetComponent("HealthScript");
function Update () {
  
        transform.LookAt(player);
        transform.position = Vector3.MoveTowards(transform.position, player.position, 2 * Time.deltaTime);
    
   
}

function OnTriggerEnter (other : Collider)    {
    
    if (other.GetComponent(Collider).name == "Player")  {
        var HS2 : HealthScript = other.GetComponent("HealthScript");
        HS2.PlayerDamage(mobDmg);
        // other.GetComponent("HealthScript").PlayerDamage(mobDmg);
    }

}