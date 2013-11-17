#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
  if (GUI.Button (Rect (0,0,200,50), "Return Top")) {
    Application.LoadLevel ("top");	  
  }
  if (GUI.Button (Rect (300,0,200,50), "Retry")) {
    Application.LoadLevel ("run");	  
  }

}
