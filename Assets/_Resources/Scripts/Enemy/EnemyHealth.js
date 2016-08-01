#pragma strict


public var health : int = 100;
//public var gameObject : GameObject;
function RemoveHealth(amount : int) {
    health = health - amount;
    Debug.Log("Enemy hit");
    if (health <= 0)
    {
        Destroy(this.gameObject);
    }
}

 /*   function OnTriggerEnter (bullet : Collider)    {
        Debug.Log("Hitteddddddddd");
     if (bullet.GetComponent(Collider).tag == "Projectile")  {
         Debug.Log("Hitted");
            RemoveHealth(20);
     }*/
     /*
     function OnCollisionEnter (col : Collision)
         {
             Debug.Log("Hitteddddddddd");
             if(col.gameObject.tag == "Projectile")    {
                 Debug.Log("Hitted");
                 RemoveHealth(20);
             }
             //Destroy(col.gameObject);
         } 
    */
 