var speed = 2.4;
var rotateSpeed = 4.5;

function Update() {
      var controller : CharacterController = GetComponent(CharacterController);

      // Rotation
      transform.Rotate(0, Input.GetAxis ("HorizontalP1") * rotateSpeed, 0);

      // Move forward and backward
      var forward = transform.TransformDirection(Vector3.forward);
      var currSpeed = speed * Input.GetAxis ("VerticalP1");
      controller.Move(forward * currSpeed);
}

@script RequireComponent(CharacterController)