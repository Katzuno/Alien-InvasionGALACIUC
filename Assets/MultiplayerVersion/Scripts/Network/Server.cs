﻿using UnityEngine;
using System.Collections;

public class Server : MonoBehaviour
{
    public float dif = 1;
    HostData[] datas;
    public Vector2 scroll;
    public string gameName = "Room Name";
	public string uniqueID = "AlienInvasion-ErikHER";
	public GUISkin gskin;
    void Start()
    {
        InvokeRepeating("GetHostList", 0, 10);
    }

    void GetHostList()
    {
		MasterServer.RequestHostList(uniqueID);
    }

    void Update()
    {
        dif = (Screen.width / 12.8f) / 100;
        datas = MasterServer.PollHostList();
    }

    void OnGUI()
    {
        if (!Network.isServer && !Network.isClient)
        {
            GUI.Box(new Rect(20 * dif, 20 * dif, 200 * dif, 200 * dif), "");
            GUILayout.BeginArea(new Rect(25 * dif, 25 * dif, 190 * dif, 190 * dif));
            gameName = GUILayout.TextField(gameName);
            if (GUILayout.Button("Start Server"))
            {
                Network.InitializeSecurity();
                Network.InitializeServer(17, 25501, /*!Network.HavePublicAddress()*/ true);
				MasterServer.RegisterHost(uniqueID, gameName);
            }
            if (GUILayout.Button("Quit"))
            {
                Application.Quit();
            }
            if (GUILayout.Button("Direct Connect"))
            {
                Network.Connect("127.0.0.1", 25501);
            }
            GUILayout.EndArea();
            GUI.Box(new Rect(Screen.width - 400 * dif, 0, 400 * dif, Screen.height), "");
            GUILayout.BeginArea(new Rect(Screen.width - 400 * dif, 0, 400 * dif, Screen.height));
            GUILayout.Label("Avaiable Servers: " + datas.Length);
            scroll = GUILayout.BeginScrollView(scroll);
            foreach (HostData data in datas)
            {
                GUILayout.BeginHorizontal();
                GUILayout.Label(data.gameName + " Players: " + data.connectedPlayers + " / " + data.playerLimit);
                if (GUILayout.Button("Connect"))
                {
                    Network.Connect(data);
                }
                GUILayout.EndHorizontal();
            }
            GUILayout.EndScrollView();
            GUILayout.EndArea();
        }
    }
}
