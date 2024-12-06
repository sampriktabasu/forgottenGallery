import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

// Set up camera controls (OrbitControls + custom key handling)
export function setupControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);

  // let blendingFactor = 0.1;

  // Custom key movement controls
  function onKeyDown(event) {
    const keycode = event.which; // Get the key code

    if (keycode === 39 || keycode === 68) { // Right arrow key or 'D'
      camera.translateX(1);
    } else if (keycode === 37 || keycode === 65) { // Left arrow key or 'A'
      camera.translateX(-1);
    } else if (keycode === 38 || keycode === 87) { // Up arrow key or 'W'
      camera.translateZ(-1);
    } else if (keycode === 40 || keycode === 83) { // Down arrow key or 'S'
      camera.translateZ(1);
    }

    // Use lerp to smoothly move the camera towards the target position
    // camera.position.lerp(targetPosition, blendingFactor);
  }

  // Attach keydown event listener
  document.addEventListener('keydown', onKeyDown);

  return controls; // Return the controls instance
}
