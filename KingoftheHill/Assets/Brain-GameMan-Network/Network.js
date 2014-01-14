
//var playerObject : GameObject;
//var createObject : Transform;

var GameName : String = "32682_KingOfTheHill";

private var refreshServer : boolean = false;
private var hostData : HostData[];

private var serverButtonX : float;
private var serverButtonY : float;
private var serverButtonW : float;
private var serverButtonH : float;

function Start() {
	serverButtonX = Screen.width * 0.05;
	serverButtonY = Screen.width * 0.05;
	serverButtonW = Screen.width * 0.90;
	serverButtonH = Screen.width * 0.1;
}

// Initializes Server
function initServer() {
	Network.InitializeServer(32, 25006, !Network.HavePublicAddress());
	MasterServer.RegisterHost(GameName, "King Of The Hill", "Control the center");
}

function OnServerInitialized() {
	Debug.Log("Connected to Server");
}

// Create player when player connects to server
//function OnConnectedToServer() {
//	Network.Instantiate(playerObject, createObject.position, Quaternion.identity, 0);
//}

// Checks to see if Server was registered
function OnMasterServerEvents(masterServerEvent : MasterServerEvent) {
	if(masterServerEvent == MasterServerEvent.RegistrationSucceeded) {
		Debug.Log("Registered Server");
	}
}

// Refreshes host list and sets refresh server to true.
function refreshHostListServers() {
	MasterServer.RequestHostList(GameName);
	refreshServer = true;
}

// Updates how many games are found if refresh is pressed
function Update() {
	if(refreshServer) {
		if(MasterServer.PollHostList().Length > 0 ) {
			refreshServer = false;
			Debug.Log(MasterServer.PollHostList().Length);
		}
	}
}

// Displays buttons for starting server
function OnGUI() {
	if(!Network.isClient && !Network.isServer) {
		if(GUI.Button(Rect(serverButtonX, serverButtonY, serverButtonW, serverButtonH), "Start Server")) {
			Debug.Log("Connecting to Server");
		}
		
		if(GUI.Button(Rect(serverButtonX, serverButtonY * 8, serverButtonW, serverButtonH), "Refresh")) {
			Debug.Log("Refreshing Hosts");
			refreshHostListServers();
		}
		
		// If there is hostData
		if(hostData) {
			for(var i=0; i<hostData.length; i++) {
				GUI.Button(Rect(serverButtonX, serverButtonY * 4, serverButtonW, serverButtonH), hostData[i].GameName);
			}
		}
	}
}