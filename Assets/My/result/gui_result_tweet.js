#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var guiStyle = getStyle();
	var W = Screen.width;
	var H = Screen.height;
	var buttonW = W/2;
	var buttonH = H/6;


  if (GUI.Button (Rect (W/2-buttonW/2,H - buttonH - 100,buttonW,buttonH), "Tweet Your Time", guiStyle)) {
	  var time = '9.012sec';
	  var text = 'My Time : ' + time + ' マッスルラン(Muscle Run)';
	  var text_encoded = WWW.EscapeURL(text);
	  var url = 'http://twitter.com/?status='+text_encoded;
	  Application.OpenURL(url);
  }
}

function getStyle(){
	var guiStyle = new GUIStyle(GUI.skin.button);
	guiStyle.fontSize = 50;
	return guiStyle;
}