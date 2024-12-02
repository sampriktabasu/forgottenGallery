import * as THREE from 'three';

export function addRoom2(scene) {
  // Floor
  const textureLoader = new THREE.TextureLoader();
  const floorTexture = textureLoader.load('textures/floor.jpg');
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(22.22, 35.55);

  const planeGeometry = new THREE.PlaneGeometry(50, 80);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide,
  });
  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;
  floorPlane.position.set(90, -Math.PI, 0); // Adjust position to align with room
  scene.add(floorPlane);

  // Walls
  const wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const wallMaterial = new THREE.MeshLambertMaterial({ color: 'BlanchedAlmond' });

  // Front Wall
  const frontWall = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 0.001), wallMaterial);
  frontWall.position.z = -40;
  frontWall.position.x = 90;
  wallGroup.add(frontWall);

  // Back Wall
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 0.001), wallMaterial);
  backWall.position.z = 40;
  backWall.position.x = 90;
  wallGroup.add(backWall);

  // Right Wall
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(80, 20, 0.001), wallMaterial);
  rightWall.rotation.y = Math.PI / 2;
  rightWall.position.x = 115;
  wallGroup.add(rightWall);

  // Left Wall
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(32.5, 20, 0.001), wallMaterial);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.x = 65;
  leftWall.position.z = 23.75;
  wallGroup.add(leftWall);

  const leftWall2 = new THREE.Mesh(new THREE.BoxGeometry(32.5, 20, 0.001), wallMaterial);
  leftWall2.rotation.y = Math.PI / 2;
  leftWall2.position.x = 65;
  leftWall2.position.z = -23.75;
  wallGroup.add(leftWall2);

  // Ceiling
  const ceilingTexture = textureLoader.load('textures/ceiling2.jpeg');
  ceilingTexture.wrapS = THREE.RepeatWrapping;
  ceilingTexture.wrapT = THREE.RepeatWrapping;
  ceilingTexture.repeat.set(20, 32);

  const ceilingGeometry = new THREE.PlaneGeometry(50, 80);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    map: ceilingTexture,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
  ceilingPlane.rotation.x = Math.PI / 2;
  ceilingPlane.position.y = 10;
  ceilingPlane.position.x = 90;
  scene.add(ceilingPlane);
}
