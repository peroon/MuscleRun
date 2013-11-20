function OnGUI () {
	var guiStyle = getStyle();
	var W = Screen.width;
	var H = Screen.width;

  if (GUI.Button (Rect (0,0,W/4,H/8), "Return Top", guiStyle)) {
    Application.LoadLevel ("top");	  
  }
}

function getStyle(){
	var guiStyle = new GUIStyle(GUI.skin.button);
	guiStyle.fontSize = 30;
	return guiStyle;
}