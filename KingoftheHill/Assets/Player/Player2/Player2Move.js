var speed = 2.4;
var rotateSpeed = 4.5;

function Update() {
      var controller : CharacterController = GetComponent(CharacterController);

      // Rotation
      transform.Rotate(0, Input.GetAxis ("HorizontalP2") * rotateSpeed, 0);

      // Move forward / backward
      var forward = transform.TransformDirection(Vector3.forward);
      var currSpeed = speed * Input.GetAxis ("VerticalP2");
      controller.Move(forward * currSpeed);
}

@script RequireComponent(CharacterController)