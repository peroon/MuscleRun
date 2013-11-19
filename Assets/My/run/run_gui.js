#pragma strict

var WIDTH = 0;
var HEIGHT= 0;

var isReadyPressed = false;

var isTimerSet = false;
var startTimeLeft = 0.0;

var isLeftPressed = false;
var isGameStart = false;
var successNum = 0;
var runningTime = 0.0;

var model_crouch:GameObject;
var model_sprint:GameObject;

function Start () {
	WIDTH = Screen.width;
	HEIGHT= Screen.height;
	isReadyPressed = false;
	isGameStart = false;
	isLeftPressed = false;

	model_crouch = GameObject.Find("baseMale@crouch");
	model_sprint = GameObject.Find("baseMale@sprint");
	model_sprint.active = false;
}

function Update () {
}

function p(v){
	print(v);
}

function OnGUI () {
	if (GUI.Button (Rect (0,0,150,40), "Return TOP")) {
		Application.LoadLevel ("top");
	}

	if(!isReadyPressed){
		beforeReadyGui();
	}else{
		//timer begin
		startTimeLeft -= Time.deltaTime;
	}

	if(isTimerSet){
		afterReadyGui();
	}

	if(isGameStart){
		runningTime += Time.deltaTime;
		gameStartGui();
	}
}

function setTimer(){
	startTimeLeft = 2.0 + 2.0 * Random.value;
}

function beforeReadyGui(){
	var readyW = 300;
	var readyH = 100;
	var readyGuiStyle = getRandomStyle(50);
	if (GUI.Button (Rect (WIDTH/2 - readyW/2,HEIGHT/2 - readyH/2,readyW,readyH), "I'm Ready.", readyGuiStyle)) {
		isTimerSet = true;
		setTimer();

		isReadyPressed = true;
	}
}
function afterReadyGui(){
	var readyW = 400;
	var readyH = 100;
	var readyGuiStyle = getRandomStyle(50);

	//before pistol
	if(startTimeLeft>0){
		GUI.Label(Rect (WIDTH/2 - readyW/2,HEIGHT/2 - readyH/2,readyW,readyH), "Ready, Set, ...", readyGuiStyle);
	}else{
		startRun();
		GUI.Label(Rect (WIDTH/2 - readyW/2,HEIGHT/2 - readyH/2,readyW,readyH), "GO!", readyGuiStyle);

		if(startTimeLeft<-0.5){
			isTimerSet = false;
		}
	}
}

function startRun(){
	isGameStart = true;
	model_crouch.active = false;
	model_sprint.active = true;

	//other script
	run_gui_text.isRunning = true;

}

function gameStartGui(){
	  // run
	  var W = WIDTH/2;
	  var H = HEIGHT/3;
	  var Y = HEIGHT - H;

	  //style 
	  var leftStyle; 
	  var rightStyle; 
	  if(isLeftPressed){
		  leftStyle = getNormalStyle();
		  rightStyle = getRandomStyle(200);
	  }else{
		  leftStyle = getRandomStyle(200);
		  rightStyle = getNormalStyle();
	  }
	  //L
	  if (GUI.Button (Rect (0,Y,W,H), "Run", leftStyle) || Input.GetKey ("left")) {
	  	if(!isLeftPressed){
	  		onSuccess();
	  		isLeftPressed = true;
	  	}
	  }
	  //R
	  if (GUI.Button (Rect (WIDTH/2,Y,W,H), "Run", rightStyle) || Input.GetKey ("right")) {
	  	if(isLeftPressed){
	  		onSuccess();
	  		isLeftPressed = false;
	  	}
	  }
}

function onSuccess(){
	successNum += 1;
	model_sprint.SendMessage('updateSpeed', successNum);
}

function getRandomStyle(_size:int){
	var guiStyle = getNormalStyle();
	guiStyle.fontSize = _size;
	var col = Color(Random.value, Random.value, Random.value);
	guiStyle.normal.textColor = col;
	guiStyle.hover.textColor = col;
	return guiStyle;
}
function getNormalStyle(){
	var guiStyle = new GUIStyle(GUI.skin.button);
	guiStyle.fontSize = 50;
	return guiStyle;
}