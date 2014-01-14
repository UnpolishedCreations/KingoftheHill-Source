#pragma strict

var playerObject : GameObject;
var playerDead : boolean = false;

function Update() {
	if(playerDead && playerObject.FindWithTag("Player1")) {
		Instantiate(playerObject.FindWithTag("Player1"), gameObject.FindWithTag("Respawn1").transform.position, Quaternion.identity);
		playerIsAlive();
	}
	
	if(playerDead && playerObject.FindWithTag("Player2")) {
		Instantiate(playerObject.FindWithTag("Player2"), gameObject.FindWithTag("Respawn2").transform.position, Quaternion.identity);
		playerIsAlive();
	}
	
}

function playerIsAlive() {
	playerDead = false;
}

function playerIsDead() {
	playerDead = true;
}