var playerObject : GameObject;
var createObject : Transform;

function OnConnectedToServer() {
	Network.Instantiate(playerObject, createObject.position, Quaternion.identity, 0);
}