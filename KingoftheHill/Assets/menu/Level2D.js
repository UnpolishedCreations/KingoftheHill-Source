#pragma strict

static var camera2D : boolean;

function Start () {
	camera2D = false;
}

function OnMouseUp () {
	camera2D = true;
	Level3D.camera3D = false;
}