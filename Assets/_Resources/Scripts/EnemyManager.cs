/*using UnityEngine;
using System.Collections;

public class EnemyManager : MonoBehaviour
{
    public GameObject player;
    public GameObject Enemy;
    void Start()
    {
        StartCoroutine(Enemy.Spawn());
    }
    IEnumerator EnemySpawn()   {
        while (true)    {
            Instantiate(player, transform.position, Quaternion.identity);
            yield return new WaitForSeconds(5f);
         }
    }
}*/