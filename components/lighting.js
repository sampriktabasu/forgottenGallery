import * as THREE from 'three';

export function addLights(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xdddddd, 0.5);
  sunLight.position.y = 15;
  scene.add(sunLight);
}


export function createSpotlight(x, y, z, intensity, targetPosition, scene) {
  const spotlight = new THREE.SpotLight(0xffffff, intensity);
  spotlight.position.set(x, y, z);
  spotlight.target.position.copy(targetPosition);
  spotlight.castShadow = true;
  spotlight.angle =  Math.PI / 3; // 1.57079;
  spotlight.penumbra = 0.5;
  spotlight.decay = 0.4;
  spotlight.distance = 40;
  spotlight.shadow.mapSize.width = 1024;
  spotlight.shadow.mapSize.height = 1024;

  // Add spotlight and its target to the scene
  scene.add(spotlight);
  scene.add(spotlight.target);

  // Add a helper for this spotlight
  // const spotlightHelper = new THREE.SpotLightHelper(spotlight);
  // scene.add(spotlightHelper);

  return spotlight;
}
