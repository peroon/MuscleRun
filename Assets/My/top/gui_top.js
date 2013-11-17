#pragma strict

//GUI for TOP

function Start () {

}

function Update () {

}

// JavaScript
function OnGUI () {
	var HEIGHT = Screen.height;
	var WIDTH = Screen.width;

	var H = 100;
	var Y = HEIGHT/2 - H/2 - 25;
	var W = 150;
	var X = 0;

	var guiStyle = getStyle();

	X = WIDTH/2 - W/2 - 200;
	if (GUI.Button (Rect (X, Y,W,H), "Run!", guiStyle)) {
		Application.LoadLevel ("run");	  
	}
	X = WIDTH/2 - W/2 + 200;
	if (GUI.Button (Rect (X,Y,W,H), "Help!", guiStyle)) {
		Application.LoadLevel ("help");	  
	}
}

function getStyle(){
	var guiStyle = new GUIStyle(GUI.skin.button);
	guiStyle.fontSize = 50;
	var col = Color(Random.value, Random.value, Random.value);
	guiStyle.normal.textColor = col;
	guiStyle.hover.textColor = col;
	return guiStyle;
}