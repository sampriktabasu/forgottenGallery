import * as THREE from 'three';

// check if objects is an array. If it's not, we assume it's a THREE.Group and set objects to objects.children. We then use forEach to loop over each object in objects and add a bounding box to it
export const createFrames = (objects) => {
    if (!Array.isArray(objects)) {
      objects = objects.children;
    }

    // Load the ornate frame texture
    const frameTexture = new THREE.TextureLoader().load('textures/frameTexture.png');
    frameTexture.wrapS = THREE.RepeatWrapping;
    frameTexture.wrapT = THREE.RepeatWrapping;
    frameTexture.repeat.set(4, 4); // Adjust to fit ornate texture proportionally

    objects.forEach((object) => {
      // Ensure the object is a painting
      if (object.userData.type !== 'painting') return;

      const { pos, rot, width, height } = object.userData;

      if (!pos || rot === undefined) {
        console.warn(`Missing position or rotation in userData for object:`, object);
        return;
      }

      // Ensure geometry and bounding box reflect all transformations
      if (object.geometry) {
        object.geometry.computeBoundingBox();
      }

      // Create a bounding box for the object
      object.BoundingBox = new THREE.Box3();
      object.BoundingBox.setFromObject(object);

      const size = new THREE.Vector3();
      object.BoundingBox.getSize(size);

      const frameThickness = 0.3; // Thickness of the frame
      const frameDepth = 0.2; // Depth of the frame
      const extendedLength = frameThickness * 2; // Extra length for frames

      let topFrame, bottomFrame, leftFrame, rightFrame;

      // Adjust the frame geometry based on the rotation
      if (rot === 0 || rot === Math.PI) {
        // Front or Back walls
        topFrame = new THREE.BoxGeometry(width, frameThickness, frameDepth);
        bottomFrame = new THREE.BoxGeometry(width, frameThickness, frameDepth);
        leftFrame = new THREE.BoxGeometry(frameThickness, height + extendedLength, frameDepth);
        rightFrame = new THREE.BoxGeometry(frameThickness, height + extendedLength, frameDepth);
      } else if (rot === Math.PI / 2 || rot === -Math.PI / 2) {
        // Side walls
        topFrame = new THREE.BoxGeometry(width, frameThickness, frameDepth);
        bottomFrame = new THREE.BoxGeometry(width, frameThickness, frameDepth);
        leftFrame = new THREE.BoxGeometry(frameThickness, height + extendedLength, frameDepth);
        rightFrame = new THREE.BoxGeometry(frameThickness, height + extendedLength, frameDepth);
      } else {
        console.warn(`Unexpected rotation value: ${rot}`);
        return;
      }

      const topFrameMesh = new THREE.Mesh(topFrame, new THREE.MeshStandardMaterial({ map: frameTexture }));
      const bottomFrameMesh = new THREE.Mesh(bottomFrame, new THREE.MeshStandardMaterial({ map: frameTexture }));
      const leftFrameMesh = new THREE.Mesh(leftFrame, new THREE.MeshStandardMaterial({ map: frameTexture }));
      const rightFrameMesh = new THREE.Mesh(rightFrame, new THREE.MeshStandardMaterial({ map: frameTexture }));

      if (rot === 0 || rot === Math.PI) {
        // Position frame pieces relative to the painting
        topFrameMesh.position.set(0, size.y / 2 + frameThickness / 2, frameDepth / 2);
        bottomFrameMesh.position.set(0, -size.y / 2 - frameThickness / 2, frameDepth / 2);
        leftFrameMesh.position.set(-size.x / 2 - frameThickness / 2, 0, frameDepth / 2);
        rightFrameMesh.position.set(size.x / 2 + frameThickness / 2, 0, frameDepth / 2);
      } else if (rot === Math.PI / 2 || rot === -Math.PI / 2) {
        // Position frame pieces relative to the painting
        topFrameMesh.position.set(frameDepth / 2, size.y / 2 + frameThickness / 2, 0);
        bottomFrameMesh.position.set(frameDepth / 2, -size.y / 2 - frameThickness / 2, 0);
        leftFrameMesh.position.set(frameDepth / 2, 0, -size.z / 2 - frameThickness / 2);
        rightFrameMesh.position.set(frameDepth / 2, 0, size.z / 2 + frameThickness / 2);
      } else {
        console.warn(`Unexpected rotation value: ${rot}`);
        return;
      }

      // Apply position and rotation from userData
      [topFrameMesh, bottomFrameMesh, leftFrameMesh, rightFrameMesh].forEach((framePart) => {
        framePart.rotation.y = rot; // Apply rotation
        framePart.position.x += pos.x; // Apply position
        framePart.position.y += pos.y;
        framePart.position.z += pos.z;
        framePart.castShadow = true;
        framePart.receiveShadow = true;
      });

      // Add the frame pieces to the same parent as the painting
      object.parent.add(topFrameMesh, bottomFrameMesh, leftFrameMesh, rightFrameMesh);
    });
  };


