import * as THREE from 'three';
import { addRoom } from './components/room.js';
import { addRoom2 } from './components/room2.js';
import { createHallway } from './components/hallway.js';
import { addLights } from './components/lighting.js';
import { addPaintings } from './components/paintings.js';
import { setupControls } from './components/controls.js';


// Initialize Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

// Add Controls
const controls = setupControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

// Add Lights
addLights(scene);

// Add Rooms and Hallway
addRoom(scene);
addRoom2(scene);
createHallway(scene);

// Add Paintings
addPaintings(scene);

// Render Loop
function render() {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction); // Get the forward direction of the camera

  const newTarget = camera.position.clone().add(direction); // Add the direction vector to the camera's position
  controls.target.copy(newTarget); // Update the controls target
  controls.update(); // Apply the update

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
