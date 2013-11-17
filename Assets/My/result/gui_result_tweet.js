#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
  if (GUI.Button (Rect (300,300,200,50), "Tweet Your Time")) {
	  var time = '9.012sec';
	  var text = 'My Time : ' + time + ' マッスルラン(Muscle Run)';
	  var text_encoded = WWW.EscapeURL(text);
	  var url = 'http://twitter.com/?status='+text_encoded;
	  Application.OpenURL(url);
  }
}
