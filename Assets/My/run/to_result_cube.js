#pragma strict

function OnTriggerEnter (other : Collider) {
	Application.LoadLevel ("result");
}