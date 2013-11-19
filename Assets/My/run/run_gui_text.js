#pragma strict

static var isRunning = false;
static var isFinish = false;
static var time = 0.0;

function Start() {
	isRunning = false;
	isFinish = false;
	time = 0.0;
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

