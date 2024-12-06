import * as THREE from 'three';
import { addRoom } from './components/room.js';
import { addRoom2 } from './components/room2.js';
import { createHallway } from './components/hallway.js';
import { addLights } from './components/lighting.js';
import { paintings, addPaintings } from './components/paintings.js';
import { setupControls } from './components/controls.js';
import { checkCollisions } from './components/collisions.js';
import { paintingClickHandling } from './components/raycasting.js';
import { createSpotlight } from './components/lighting.js'


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
const paintingObjects = addPaintings(scene);

// Add painting interactivity
paintingClickHandling(renderer, camera, paintingObjects);

// Add spotlights to paintings
paintings.forEach((painting) => {
  if (painting.rotation === 0) {
    const spotlight = createSpotlight(
      painting.position.x, // Spotlight x (same as painting x)
      10, // Spotlight y (slightly above painting)
      painting.position.z + 3, // Spotlight z (same as painting z)
      5.5, // Intensity
      painting.position, // Target position (the painting)
      scene
    );
  }

  if (painting.rotation === Math.PI / 2) {
    const spotlight = createSpotlight(
      painting.position.x + 3, // Spotlight x (same as painting x)
      10, // Spotlight y (slightly above painting)
      painting.position.z, // Spotlight z (same as painting z)
      5.5, // Intensity
      painting.position, // Target position (the painting)
      scene
    );
  }

  if (painting.rotation === -Math.PI / 2) {
    const spotlight = createSpotlight(
      painting.position.x - 3, // Spotlight x (same as painting x)
      10, // Spotlight y (slightly above painting)
      painting.position.z, // Spotlight z (same as painting z)
      5.5, // Intensity
      painting.position, // Target position (the painting)
      scene
    );
  }

  if (painting.rotation === Math.PI) {
    const spotlight = createSpotlight(
      painting.position.x, // Spotlight x (same as painting x)
      10, // Spotlight y (slightly above painting)
      painting.position.z - 3, // Spotlight z (same as painting z)
      5.5, // Intensity
      painting.position, // Target position (the painting)
      scene
    );
  }
});


// Render Loop
function render() {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction); // Get the forward direction of the camera

  const newTarget = camera.position.clone().add(direction); // Add the direction vector to the camera's position
  controls.target.copy(newTarget); // Update the controls target
  controls.update(); // Apply the update

  // Check for collisions
  checkCollisions(camera);

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
