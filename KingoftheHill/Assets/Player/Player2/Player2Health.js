#pragma strict

static var fullHealth : int = 100;
static var health : int = fullHealth;
static var numDeathsP2 : int;

private var playerPosition : Vector3;

var respawnPosition : GameObject;
var playerDeath : GameObject;
var player : GameObject;

var deathPenalty : int = 150;

var healthBarLengthBG : float;
var healthBarLengthFG : float;
var healthTextureBG : Texture;
var healthTextureFG : Texture;

function Start () {
	health = fullHealth;
	numDeathsP2 = 0;
}

function Update() {

	//var temp_health = health/full_health;
	//renderer.material.color = Color.Lerp(Color.red, Color.green, temp_health);
	if(health == fullHealth)
		renderer.material.color = Color.green;
		
	if(health == 75) 
		renderer.material.color = Color.yellow;
		
	if(health == 50) 
		renderer.material.color = Color(1, 0.5, 0, 1); // Orange
		
	if(health == 25) 
		renderer.material.color = Color.red;
		
	if(health == 0) {
		playerPosition = transform.position;
		Instantiate(playerDeath, playerPosition, Quaternion.identity);
		
		// Respawn
		transform.position = respawnPosition.transform.position;
		health = fullHealth;
		
		//Death Penalty
		if(ControlKingArea.p2Time + deathPenalty > 1500)
			ControlKingArea.p2Time = 1500;
		else
			ControlKingArea.p2Time += deathPenalty;
		
		// Times dead
		numDeathsP2++;
	}
}

function OnGUI() {
	if(Level3D.camera3D) {
		GUI.DrawTexture(new Rect(Screen.width/2 + 10, 10, fullHealth, 20), healthTextureBG, ScaleMode.ScaleAndCrop, true, 10.0f);
		GUI.DrawTexture(new Rect(Screen.width/2 + 10, 10, health, 20), healthTextureFG, ScaleMode.ScaleAndCrop, true, 10.0f);
	}
}

