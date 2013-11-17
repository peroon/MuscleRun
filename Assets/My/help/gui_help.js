#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
  if (GUI.Button (Rect (0,0,100,50), "Return Top")) {
    Application.LoadLevel ("top");	  
  }
}
