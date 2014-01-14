#pragma strict
// Displays scores.
function OnGUI () {
	// Score Summary
	GUI.Label (Rect(Screen.width/3, 80, 100, 20), "Summary");

    // Player 1 Score
    if(ControlKingArea.winP1)
    	GUI.Label (Rect(Screen.width/4, 105, 100, 20), "Player 1 : Winner");
    else 
    	GUI.Label (Rect(Screen.width/4, 105, 100, 20), "Player 1");
    
    GUI.Label (Rect ((Screen.width/4), 130, 100, 20), "" + Player1Health.numDeathsP1 + " : Deaths");
    GUI.Label (Rect ((Screen.width/4), 155, 100, 20), "" + Player1GunFire.shotsFiredP1 + " : Shots Fired");
    if(Player1GunFire.shotsFiredP1 == 0)
    	GUI.Label (Rect ((Screen.width/4), 180, 100, 20), "" + ((Player1GunFire.shotsHitP1 * 100)) + "% : Accuracy");
    else
    	GUI.Label (Rect ((Screen.width/4), 180, 100, 20), "" + ((Player1GunFire.shotsHitP1 * 100) / Player1GunFire.shotsFiredP1) + "% : Accuracy");
    
    // Player 2 Score
    if(ControlKingArea.winP2)
		GUI.Label (Rect (Screen.width/2, 105, 100, 20), "Player 2: Winner");
    else 
    	GUI.Label (Rect (Screen.width/2, 105, 100, 20), "Player 2: "); 
    
    GUI.Label (Rect ((Screen.width/2), 130, 100, 20), "" + Player2Health.numDeathsP2 + " : Deaths");
    GUI.Label (Rect ((Screen.width/2), 155, 100, 20), "" + Player2GunFire.shotsFiredP2 + " : Shots Fired");
    if(Player2GunFire.shotsFiredP2 == 0)
    	GUI.Label (Rect ((Screen.width/2), 180, 100, 20), "" + ((Player2GunFire.shotsHitP2 * 100)) + "% : Accuracy");
    else
    	GUI.Label (Rect ((Screen.width/2), 180, 100, 20), "" + ((Player2GunFire.shotsHitP2 * 100) / Player2GunFire.shotsFiredP2) + "% : Accuracy");

}
