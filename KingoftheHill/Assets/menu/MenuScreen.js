#pragma strict

function OnMouseEnter () {
	renderer.material.color = Color.green;
}

function OnMouseExit () {
	renderer.material.color = Color.white;
}

// Go to Menu
function OnMouseUp () {
	Application.LoadLevel(0);
}
