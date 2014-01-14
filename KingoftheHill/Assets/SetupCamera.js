#pragma strict

var mainCamera : Camera; 
var player1Camera : Camera;
var player2Camera : Camera;
var scoreText : GameObject;
var menuText : GameObject;
var divideTexture : Texture;

function Update () {
	mainCamera.enabled = !Level3D.camera3D;
	player1Camera.enabled = !Level2D.camera2D;
	player2Camera.enabled = !Level2D.camera2D;
	
	scoreText.active = !Level3D.camera3D;
	menuText.active = !Level3D.camera3D;
}

function OnGUI() {
	if(Level3D.camera3D) {
		GUI.DrawTexture(new Rect((Screen.width/2) - 1, 0, 2, Screen.height), divideTexture, ScaleMode.ScaleAndCrop, true, 10.0f);
	}
}