#pragma strict

var player1 : GameObject;
var player2 : GameObject;
var middlePosition : Vector3;

function Start() {
	middlePosition = transform.position;
}

function Update () {
	if(ControlKingArea.givePointsP1) {
		transform.position = player1.transform.position;
		transform.position.y += 0.41;
	}
	else if(ControlKingArea.givePointsP2) {
		transform.position = player2.transform.position;
		transform.position.y += 0.41;
	}
	else {
		transform.position = middlePosition;
	}
}