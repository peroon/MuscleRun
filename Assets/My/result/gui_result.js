#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var guiStyle = getStyle();
	
	var W = Screen.width;
	var H = Screen.height;
	var buttonW = W/4;
	var buttonH = H/6;

  if (GUI.Button (Rect (0,0,buttonW,buttonH), "Return Top", guiStyle)) {
    Application.LoadLevel ("top");	  
  }
  if (GUI.Button (Rect (W - W/4,0,buttonW,buttonH), "Retry", guiStyle)) {
    Application.LoadLevel ("run");	  
  }

}

function getStyle(){
	var guiStyle = new GUIStyle(GUI.skin.button);
	guiStyle.fontSize = 50;
	return guiStyle;
}