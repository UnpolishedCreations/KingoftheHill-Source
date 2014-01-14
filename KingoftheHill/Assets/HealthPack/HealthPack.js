#pragma strict

/*
 * Function: 	Detects when player collides into a helthpack.
 * 				Despawns helthpack if the player has <100 health, and adds health
 *				Respawn helthpack after X seconds.
 *
 */

var lifeRestored : int = 50;
var healthPackRespawnTime : float = 20; // in seconds 
var clip1 : AudioClip;
var clip2 : AudioClip;

function OnTriggerEnter(hit : Collider) {
	// Player 1 Healthpack pickup
	if(hit.CompareTag("Player1")) {
		if(Player1Health.health < Player1Health.fullHealth) {
			if(Player1Health.health + lifeRestored > Player1Health.fullHealth)
				Player1Health.health = Player1Health.fullHealth;
			else
				Player1Health.health += lifeRestored;
			audio.PlayClipAtPoint(clip1, gameObject.transform.position); 
			healthDespawn();
		}
        Debug.Log("+" + lifeRestored + " Health: " + Player1Health.health);
	}
	
	// Player 2 Healthpack pickup
	if(hit.CompareTag("Player2")) {
		if(Player2Health.health < Player2Health.fullHealth) {
			if(Player2Health.health + lifeRestored > Player2Health.fullHealth)
				Player2Health.health = Player2Health.fullHealth;
			else
				Player2Health.health += lifeRestored;
			audio.PlayClipAtPoint(clip2, gameObject.transform.position);
			healthDespawn();
		}
        Debug.Log("+" + lifeRestored + " Health: " + Player2Health.health);
	}
}

function healthDespawn() {
	this.renderer.enabled = false;
	this.collider.enabled = false;
	yield StartCoroutine("healthRespawn");
}

function healthRespawn() {
	yield WaitForSeconds(healthPackRespawnTime);
	this.renderer.enabled = true;
	this.collider.enabled = true;
}


