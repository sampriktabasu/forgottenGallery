import * as THREE from 'three';

export function addLights(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xdddddd, 1.0);
  sunLight.position.y = 15;
  scene.add(sunLight);
}
