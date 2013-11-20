#pragma strict

function OnTriggerEnter (other : Collider) {
	print("goal");
	Destroy(other);
	//Application.LoadLevel ("result");
	run_gui_text.isFinish = true;
	run_gui_text.isRunning = false;
}