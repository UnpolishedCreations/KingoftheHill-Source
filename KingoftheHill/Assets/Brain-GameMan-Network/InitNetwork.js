#pragma strict

// Launch the server
function LaunchServer () {
    Network.incomingPassword = "king";
    var useNat = !Network.HavePublicAddress();
    Network.InitializeServer(16, 25000, useNat);
    Debug.Log("CGello");
}

// If Server can't be connected to
function OnFailedToConnect(error : NetworkConnectionError) {
    Debug.Log("Could not connect to server: " + error);
}

// Connect to the server if it was lunched successfully
function ConnectToServer () {
    Network.Connect("127.0.0.1", 25000);
}