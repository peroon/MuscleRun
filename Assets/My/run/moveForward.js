#pragma strict

var speed = 0.0;
var animationSpeed = 0.0;

function Start () {
  speed = 10.0;
  animationSpeed = 1.0;
}

function Update () {
  animation["sprint"].speed = animationSpeed;
  transform.Translate(Vector3.forward * Time.deltaTime * speed);
}

function updateSpeed(successNum:float){
	var SPEED_LIMIT = 200;
	var ANIMATION_SPEED_LIMIT = 4.0;

	if(speed < SPEED_LIMIT){
		speed += (successNum * 0.5);
	}

	if(animationSpeed< ANIMATION_SPEED_LIMIT){
		animationSpeed += (successNum * 0.01);
	}
}