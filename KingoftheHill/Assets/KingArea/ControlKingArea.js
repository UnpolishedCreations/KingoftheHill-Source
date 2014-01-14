#pragma strict

static var p1Time : int; // 3000 = ~1 minute --- ~1500 = 30seconds
static var p2Time : int;
static var numberOfPlayersInArea :int;
static var givePointsP1 : boolean;
static var givePointsP2 : boolean;
static var winP1 : boolean;
static var winP2 : boolean;

var p1InKingArea : boolean;
var p2InKingArea : boolean;

var pointsPerSecond : float = 1.0;

var crown : GameObject;

function Start() {
	p1Time = 1500;
	p2Time = 1500;
	winP1 = false;
	winP2 = false;
	givePointsP1 = false;
	givePointsP2 = false;
	p1InKingArea = false;
	p2InKingArea = false;
	numberOfPlayersInArea = 0;
}

function Update() {

	// Checks if both players are in King Area
	if(p1InKingArea && !p2InKingArea)
		givePointsP1 = true;
	else if(!p1InKingArea && p2InKingArea)
		givePointsP2 = true;
	else
		givePointsP1 = givePointsP2 = false;
	
	
	if(p1Time <= 0) {
		Debug.Log("Player 1 Wins");
		winP1 = true;
		Application.LoadLevel(2);
	}
	if(p2Time <= 0) {
		Debug.Log("Player 2 Wins");
		winP2 = true;
		Application.LoadLevel(2);
	}
}

function OnTriggerEnter(hit : Collider) {
	numberOfPlayersInArea++;
	
	// If player enters area set them as in area
	if(hit.CompareTag("Player1"))
		p1InKingArea = true;
	if(hit.CompareTag("Player2")) 
		p2InKingArea = true;
		
	Debug.Log("Player Enter - #of Players in Area: " + numberOfPlayersInArea);
}

// As one player is active in King Area
function OnTriggerStay (hit : Collider) {
    if(givePointsP1) {
    	yield StartCoroutine("controlKingArea");
    }
    if(givePointsP2) {
    	yield StartCoroutine("controlKingArea");
    }
}

// When player exits decrement number of players in area and set player in area false
function OnTriggerExit(hit : Collider) {
	if(hit.CompareTag("Player1")) {
		numberOfPlayersInArea--;
		p1InKingArea = false;
	}
	if(hit.CompareTag("Player2")) {
		numberOfPlayersInArea--;
		p2InKingArea = false;
	}
	Debug.Log("Player Exit - #of Players in Area: " + numberOfPlayersInArea);
}


function controlKingArea () {
	if(givePointsP1)
		p1Time -= pointsPerSecond;
	
	if(givePointsP2)
		p2Time -= pointsPerSecond;
	
	yield WaitForSeconds(pointsPerSecond);
}