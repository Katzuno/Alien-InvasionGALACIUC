using UnityEngine;
using System.Collections;

public class ApplicationManager : MonoBehaviour {
	
	public void Start ()	{
		Cursor.visible = true;
		Cursor.lockState = CursorLockMode.None;
	}
	public void Quit () 
	{
		#if UNITY_EDITOR
		UnityEditor.EditorApplication.isPlaying = false;
		#else
		Application.Quit();
		#endif
	}
}
