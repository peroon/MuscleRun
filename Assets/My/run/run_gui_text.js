#pragma strict

static var isRunning = false;
static var isFinish = false;
static var time = 0.0;
var W = 0;
var H = 0;
var buttonW = 0;
var buttonH = 0;

function Start() {
	isRunning = false;
	isFinish = false;
	time = 0.0;

	W = Screen.width;
	H = Screen.height;
	buttonW = W/4;
	buttonH = H/6;
}

function Update () {
	if(isRunning){
		time += Time.deltaTime;
		guiText.text = time.ToString("#0.000") + ' sec';
	}

	if(isFinish){
		guiText.material.color = Color(Random.value, Random.value, Random.value);
		//style
	}
}

function OnGUI () {
	if(isFinish){
		//result button

		if (GUI.Button (Rect (W - buttonW,0 + buttonH,buttonW,buttonH), "Result")){
			Application.LoadLevel ("result");
		}
	}
}