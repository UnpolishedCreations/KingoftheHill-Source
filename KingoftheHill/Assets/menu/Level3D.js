#pragma strict

static var camera3D : boolean;

function Start () {
	camera3D = false;
}

function OnMouseUp () {
	Level2D.camera2D = false;
	camera3D = true;
}