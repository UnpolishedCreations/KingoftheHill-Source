#pragma strict

var showInstructions : boolean;
var style : GUIStyle;
var style2 : GUIStyle;

function Start() {
	showInstructions = false;
	style.fontSize= 20;
	style.normal.textColor = Color.green;
	style2.fontSize= 20;
	style2.normal.textColor = Color.red;
}

function Update() {
	if(Input.GetKeyDown ("m"))
		showInstructions = false;
}

function OnMouseUp () {
	showInstructions = true;
}

function OnGUI() {
	if(showInstructions) {
		// Grey background
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 - 10, Screen.width/2, Screen.height/2), "");
		
		// How to play
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 - 10, Screen.width/2, Screen.height/2), "How to Play", style2);
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 + 20, Screen.width/2, Screen.height/2), "Objective: Control the middle until you reach 0 points.", style);
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 + 40, Screen.width/2, Screen.height/2), "Upon Death: 150 points will get added to your score.", style);
		
		// Player 1 controls
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 + 70, Screen.width/2, Screen.height/2), "Controls - Player 1", style2);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 90, Screen.width/2, Screen.height/2), "A: rotate left. D: rotate right.", style);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 110, Screen.width/2, Screen.height/2), "W: Move forward. S: Move backwards.", style);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 130, Screen.width/2, Screen.height/2), "Q: Shoot gun", style);
		
		//Player 2 Controls
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 + 160, Screen.width/2, Screen.height/2), "Controls - Player 2", style2);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 180, Screen.width/2, Screen.height/2), "Left Arrow: rotate left. Right Arrow: rotate right.", style);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 200, Screen.width/2, Screen.height/2), "Up Arror: Move forward. DownArror: Move backwards.", style);
		GUI.Box(new Rect(Screen.width/4 + 10, Screen.height/4 + 220, Screen.width/2, Screen.height/2), "Spacebar: Shoot gun", style);
		
		// Return to menu
		GUI.Box(new Rect(Screen.width/4, Screen.height/4 + 250, Screen.width/2, Screen.height/2), "Return to Menu, Press: M", style2);
	
	
	}
}