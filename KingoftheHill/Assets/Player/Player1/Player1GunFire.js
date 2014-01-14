#pragma strict

static var shotsFiredP1 : int;
static var shotsHitP1 : int;

var projectile : Transform;
var fireRate : float = 0.25;
var showBeamLength : float = 0.10;
var canFire : boolean = true;
var showGunBeam : boolean;
var clip : AudioClip;

function Start() {
	// Gun beam
	var gunBeam : LineRenderer = gameObject.AddComponent(LineRenderer);
	gunBeam.SetWidth(0.07, 0.07);
	gunBeam.material.color = Color.red;
	//gunBeam.material = new Material (Shader.Find("Particles/Additive"));
	
	// Stats for number of shots
	shotsFiredP1 = 0;
	shotsHitP1 = 0;
}

function Update () {
    var fwd = transform.TransformDirection (Vector3.forward*10);
    var hit : RaycastHit;
    var gunBeam : LineRenderer = GetComponent(LineRenderer);
    var mask = ~(1 << 8);
    
    Debug.DrawLine (transform.position, fwd + transform.position);
    
    if(!showGunBeam)	
	    gunBeam.enabled = false;
    
    // When Space is pressed - fire gun
    if(Input.GetKeyDown ("q") && canFire) {
    	audio.PlayClipAtPoint(clip, hit.point);
    	shotsFiredP1++;
    	
		if(Physics.Raycast (transform.position, fwd, hit, 100000f, mask)) {
			Instantiate(projectile, hit.point, Quaternion.identity);
	        
	        // Creates gun's beam
	        showGunBeam = true;
	        gunBeam.enabled = true;
			gunBeam.SetVertexCount(2);
	    	gunBeam.SetPosition(0, transform.position); 
	    	fwd.Normalize();
	    	gunBeam.SetPosition(1, transform.position + fwd * hit.distance);
	        	        
	        // If player 2 is hit
	        if(hit.collider.gameObject.tag == "Player2") {
	        	Player2Health.health -= 25;
	        	shotsHitP1++;
	        }
		}
		gunController();
		gunBeamController();
	} 
	
}

// Helper Function
function gunController() {
	yield StartCoroutine("fireGun");
}

// Controls rate of fire
function fireGun() {
	canFire = false;
	yield WaitForSeconds(fireRate);
	canFire = true;
}

// Dertermines how long the beam is shown
function gunBeamController() {
	yield StartCoroutine("showGunBeamValue");
}

function showGunBeamValue() {
	yield WaitForSeconds(showBeamLength);
	showGunBeam = false;
}