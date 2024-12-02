import * as THREE from 'three';

export function createHallway(scene) {
    // Create floor texture
    const textureLoader = new THREE.TextureLoader();
    const floorTexture = textureLoader.load('textures/floor.jpg');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(19, 6.33);

    // Create the hallway floor geometry
    const hallwayGeometry = new THREE.PlaneGeometry(42.5, 15); // Hallway dimensions
    const hallwayMaterial = new THREE.MeshBasicMaterial({
        map: floorTexture,  // Reuse the floor texture
        side: THREE.DoubleSide
    });
    const hallwayFloor = new THREE.Mesh(hallwayGeometry, hallwayMaterial);

    // Position the hallway (adjust position relative to the room)
    hallwayFloor.rotation.x = Math.PI / 2; // Make it horizontal
    hallwayFloor.position.set(43.75, -Math.PI, 0); // Adjust position to align with room

    // Add the hallway to the scene
    scene.add(hallwayFloor);

    // Wall thickness (thickness of walls in the room and hallway)
    const wallThickness = 0.1;
    // Create the hallway walls with same height as room walls
    const wallHeight = 15; // Use the room's height for the hallway walls

    // Walls
    const WallGeometry = new THREE.BoxGeometry(45, wallHeight, wallThickness);
    const WallMaterial = new THREE.MeshLambertMaterial({ color: 'BlanchedAlmond' });

    // Left wall
    const rightWall = new THREE.Mesh(WallGeometry, WallMaterial);
    rightWall.position.set(42.5, 2.5, -7.5); // Align with back of the hallway

    // Right wall
    const leftWall = new THREE.Mesh(WallGeometry, WallMaterial);
    leftWall.position.set(42.5, 2.5, 7.5); // Align with back of the hallway

    // Add walls to the scene
    scene.add(rightWall, leftWall);

    // Add ceiling
    const ceilingTexture = new THREE.TextureLoader().load('textures/ceiling2.jpeg');
    ceilingTexture.wrapS = THREE.RepeatWrapping;
    ceilingTexture.wrapT = THREE.RepeatWrapping;
    ceilingTexture.repeat.set(20, 20);

    const ceilingGeometry = new THREE.PlaneGeometry(45, 15);
    const ceilingMaterial = new THREE.MeshLambertMaterial({
        map: ceilingTexture,
        side: THREE.DoubleSide,
    });

    // Create the ceiling mesh and position it above the hallway floor
    const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceilingPlane.rotation.x = Math.PI / 2; // Rotate it to make it horizontal
    ceilingPlane.position.set(42.5, 10, 0); // Position at room height

    // Add ceiling to the scene
    scene.add(ceilingPlane);
}
