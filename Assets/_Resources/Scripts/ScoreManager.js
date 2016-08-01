#pragma strict


var HighScore : int;
var currentScore : int = 0; 	
var hitCrosshairTexture : Texture;
private var alphaHit : float;
var hitSound : AudioClip;
	
var mySkin : GUISkin;
	
var pointsToNextRank : int = 50;
var lvl : int = 0;
var levelUpSound : AudioClip;
private var playerDead : boolean = false;
var aSource : AudioSource;
public var style : GUIStyle;
public var style2 : GUIStyle;

function Start()    {
    if (PlayerPrefs.HasKey("Score"))	{
    	if (Application.loadedLevel == 1)	{
    		PlayerPrefs.DeleteKey("Score");
    		currentScore = 0;
    	}
    	else	{
    		currentScore = PlayerPrefs.GetInt("Score");
    	}
    }

     if (PlayerPrefs.HasKey("HighScore"))	{
     	HighScore = PlayerPrefs.GetInt("HighScore");
     }
}

function Update () {
	if (alphaHit > 0) 
		alphaHit -= Time.deltaTime;
}

function DrawCrosshair(){
	yield WaitForSeconds(0.05);
	alphaHit = 1.0;
	aSource.PlayOneShot(hitSound, 0.2);
}

function addScore(val : int){
    currentScore += val;
	
    if(currentScore >= pointsToNextRank){
        lvl++;
        aSource.PlayOneShot(levelUpSound, 0.2);	
        pointsToNextRank += currentScore;
    }
}

function PlayerDead(){
        SaveScore();
        CheckHighScore();
	playerDead = true;
}
function SaveScore()    {
    PlayerPrefs.SetInt("Score", currentScore);
}

function CheckHighScore()	{
		if (PlayerPrefs.HasKey("HighScore"))	{
        	if (PlayerPrefs.GetInt("HighScore") < currentScore)
        		PlayerPrefs.SetInt("HighScore", currentScore);
        }
        else	{
        	PlayerPrefs.SetInt("HighScore", currentScore);
        }
}



function OnGUI(){
	if(playerDead)
		 return;
	
	GUI.skin = mySkin;
	GUI.depth = 2;
	if (Application.loadedLevel == 1)	{
		GUI.Label (Rect(40, Screen.height - 80,100,60)," SCORE :");
		GUI.Label (Rect(100, Screen.height - 80,160,60),"" + currentScore, mySkin.customStyles[0]);
		GUI.color = Color(1.0, 1.0, 1.0, alphaHit);
		GUI.DrawTexture (Rect ((Screen.width /2) - 16, (Screen.height/2) - 16, 32, 32), hitCrosshairTexture);
	}
	else if (Application.loadedLevel == 3)	{
		GUI.Label (Rect(40, Screen.height - 550,100,60)," SCORE :", style);
		GUI.Label (Rect(100, Screen.height -550,160,60),"" + currentScore, style2);

		GUI.Label (Rect(50, Screen.height - 500,100,60)," Best Score :", style);
		GUI.Label (Rect(110, Screen.height -500,200,60),"" + HighScore, style2);


		GUI.color = Color(1.0, 1.0, 1.0, alphaHit);
		GUI.DrawTexture (Rect ((Screen.width /2) - 16, (Screen.height/2) - 16, 32, 32), hitCrosshairTexture);



		//GUI.color = Color(1.0, 1.0, 1.0, alphaHit);
		//GUI.DrawTexture (Rect ((Screen.width /2) - 10, (Screen.height/2) - 10, 32, 32), hitCrosshairTexture);
	}
	


	//GUI.Label (Rect(40, Screen.height - 110,100,60)," Level :");
	//GUI.Label (Rect(100, Screen.height - 110,160,60),"" + lvl, mySkin.customStyles[0]);
}	