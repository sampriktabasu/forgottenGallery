import * as THREE from 'three';

function createPainting(imageUrl, width, height, position, rotation = 0) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(imageUrl);
  const paintingMaterial = new THREE.MeshBasicMaterial({ map: paintingTexture });
  const paintingGeometry = new THREE.PlaneGeometry(width, height);
  const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
  painting.position.set(position.x, position.y, position.z);
  painting.rotation.y = rotation;
  return painting;
}

export function addPaintings(scene) {
  const paintings = [
    { url: '/artworks/0.jpg', width: 10, height: 5, position: { x: -10, y: 5, z: -19.99 } },
    { url: '/artworks/1.jpg', width: 10, height: 5, position: { x: 10, y: 5, z: -19.99 } },
    { url: '/artworks/2.jpg', width: 10, height: 5, position: { x: -19.99, y: 5, z: -10 }, rotation: Math.PI / 2 },
    { url: '/artworks/3.jpg', width: 10, height: 5, position: { x: -19.99, y: 5, z: 10 }, rotation: Math.PI / 2 },
    { url: '/artworks/4.jpg', width: 7, height: 9, position: { x: 19.99, y: 3, z: -10 }, rotation: -Math.PI / 2 },
    { url: '/artworks/5.jpg', width: 10, height: 5, position: { x: 19.99, y: 5, z: 10 }, rotation: -Math.PI / 2 },
    { url: '/artworks/6.jpg', width: 10, height: 5, position: { x: -10, y: 5, z: 19.99 } },
    { url: '/artworks/7.jpg', width: 10, height: 5, position: { x: 10, y: 5, z: 19.99 } },
  ];

  paintings.forEach(({ url, width, height, position, rotation }) => {
    const painting = createPainting(url, width, height, position, rotation);
    scene.add(painting);
  });
}
