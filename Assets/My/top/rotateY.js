#pragma strict

var rotateSpeed = 0;

function Start () {
  rotateSpeed = 10;
}

function Update () {
  transform.Rotate(rotateSpeed * Vector3.up * Time.deltaTime, Space.World);
}


