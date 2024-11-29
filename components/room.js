import * as THREE from 'three';

export function addRoom(scene) {
  // Floor
  const textureLoader = new THREE.TextureLoader();
  const floorTexture = textureLoader.load('textures/floor.jpg');
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(20, 20);

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide,
  });
  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;
  scene.add(floorPlane);

  // Walls
  const wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const wallMaterial = new THREE.MeshLambertMaterial({ color: 'BlanchedAlmond' });

  // Front Wall
  const frontWall = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 0.001), wallMaterial);
  frontWall.position.z = -20;
  wallGroup.add(frontWall);

  // Back Wall
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 0.001), wallMaterial);
  backWall.position.z = 20;
  wallGroup.add(backWall);

  // Left Wall
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 0.001), wallMaterial);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.x = -20;
  wallGroup.add(leftWall);

  // Right Wall
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(15, 20, 0.001), wallMaterial);
  rightWall.rotation.y = Math.PI / 2;
  rightWall.position.x = 20;
  rightWall.position.z = 15;
  wallGroup.add(rightWall);

  const rightWall2 = new THREE.Mesh(new THREE.BoxGeometry(15, 20, 0.001), wallMaterial);
  rightWall2.rotation.y = Math.PI / 2;
  rightWall2.position.x = 20;
  rightWall2.position.z = -15;
  wallGroup.add(rightWall2);

  // Ceiling
  const ceilingTexture = textureLoader.load('textures/ceiling2.jpeg');
  ceilingTexture.wrapS = THREE.RepeatWrapping;
  ceilingTexture.wrapT = THREE.RepeatWrapping;
  ceilingTexture.repeat.set(20, 20);

  const ceilingGeometry = new THREE.PlaneGeometry(50, 50);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    map: ceilingTexture,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
  ceilingPlane.rotation.x = Math.PI / 2;
  ceilingPlane.position.y = 10;
  scene.add(ceilingPlane);
}
