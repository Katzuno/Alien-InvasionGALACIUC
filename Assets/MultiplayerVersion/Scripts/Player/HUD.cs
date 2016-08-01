using UnityEngine;
using System.Collections;

public class HUD : MonoBehaviour
{
    public PlayerVitals pv;
    public Weapon wep;

	public GUISkin gskin;
	public GUIStyle style;
	public GUIStyle style2;
	Texture hitCrosshairTexture;
	private float alphaHit;

    // Use this for initialization
    void Start()
    {
        if (!GetComponent<NetworkView>().isMine)
        {
            this.enabled = false;
        }
    }

    // Update is called once per frame
    void OnGUI()
    {
        if (GetComponent<NetworkView>().isMine)
        {
			GUI.depth = 2;
			GUI.Label (new Rect(40, Screen.height - 80,40,60)," Health :", gskin.customStyles[1]);
			GUI.Label (new Rect(100, Screen.height - 77,160,60),"" + pv.hitPoints.ToString("F0"), gskin.customStyles[0]);
			//GUI.color = Color(1.0, 1.0, 1.0, alphaHit);
			GUI.Label (new Rect(40, Screen.height - 40,30,40)," Bullets :", gskin.customStyles[1]);
			GUI.Label (new Rect(100, Screen.height - 37,150,40),"" + wep.bulletsLeftRead + " / " + wep.bulletsPerMagRead + " | " + wep.magsLeftRead, gskin.customStyles[0]);
			GUI.DrawTexture (new Rect ((Screen.width /2) - 16, (Screen.height/2) - 16, 32, 32), hitCrosshairTexture);
           // GUI.Label(new Rect(20, Screen.height - 40, 100, 40), "Health: " + pv.hitPoints.ToString("F0"));
            //GUI.Label(new Rect(20, Screen.height - 20, 150, 40), "Ammo: " + wep.bulletsLeftRead + " / " + wep.bulletsPerMagRead + " | " + wep.magsLeftRead);
        }
        else
        {
            this.enabled = false;
        }
    }
}
