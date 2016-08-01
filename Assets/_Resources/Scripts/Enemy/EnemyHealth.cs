using UnityEngine;
using System.Collections;

public class EnemyHealth : MonoBehaviour {

    public float health = 100f;

    public void RemoveHealth (float amount)
    {
        health = health - amount;
        if (health <= 0)
        {
            Destroy(gameObject);
        }
    }

}
