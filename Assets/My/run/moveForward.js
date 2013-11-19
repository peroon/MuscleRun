#pragma strict

var speed = 0.0;
var animationSpeed = 0.0;

var speedInit = 0.01;
var animationSpeedInit = 0.01;

function Start () {
  speed = speedInit;
  animationSpeed = animationSpeedInit;
}

function Update () {
  animation["sprint"].speed = animationSpeed;
  transform.Translate(Vector3.forward * Time.deltaTime * speed);
}

function updateSpeed(successNum:float){
	var SPEED_LIMIT = 300;
	var ANIMATION_SPEED_LIMIT = 4.0;

	if(speed < SPEED_LIMIT){
		speed *= 1.01;
	}

	if(animationSpeed < ANIMATION_SPEED_LIMIT){
		animationSpeed *= 1.005;
	}
}