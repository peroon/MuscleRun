#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var time = run_gui_text.time.ToString("#0.000");
	guiText.text = "Your Time : "+time+" sec";
}
