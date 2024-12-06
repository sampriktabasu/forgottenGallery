import * as THREE from 'three';

function createPainting(imageUrl, width, height, position, info, rotation = 0) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(imageUrl);
  const paintingMaterial = new THREE.MeshBasicMaterial({ map: paintingTexture });
  const paintingGeometry = new THREE.PlaneGeometry(width, height);
  const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
  painting.position.set(position.x, position.y, position.z);
  painting.rotation.y = rotation;

  painting.userData = {
    type: 'painting', // add a type property to the userData object so we can check if the object is a painting or not
    information: info, // add the painting info to the userData object. `data` is the current painting object in the forEach loop. `info` is a property of the painting object that holds the painting info
  };

  return painting;
}

export function addPaintings(scene) {
  const paintings = [
    { url: '/artworks/0.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -8.5, y: 5, z: -19.99 } },
    { url: '/artworks/1.jpg', width: 10, height: 5, info: {title: 'starry night', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 8.5, y: 5, z: -19.99 } },
    { url: '/artworks/2.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -19.99, y: 5, z: -8.5 }, rotation: Math.PI / 2 },
    { url: '/artworks/3.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -19.99, y: 5, z: 8.5 }, rotation: Math.PI / 2 },
    { url: '/artworks/4.jpg', width: 7, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 19.99, y: 3, z: -13.5 }, rotation: -Math.PI / 2 },
    { url: '/artworks/5.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 19.99, y: 5, z: 14 }, rotation: -Math.PI / 2 },
    { url: '/artworks/6.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -8.5, y: 5, z: 19.99 }, rotation: -Math.PI },
    { url: '/artworks/7.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 8.5, y: 5, z: 19.99 }, rotation: -Math.PI },
    { url: '/artworks/8.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 80, y: 5, z: -39.99 } }, // correct // left
    { url: '/artworks/9.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 100, y: 5, z: -39.99 } }, // correct // left 
    { url: '/artworks/10.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 80, y: 5, z: 39.99 }, rotation: -Math.PI }, // rigth ? correct
    { url: '/artworks/11.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 100, y: 5, z: 39.99 }, rotation: -Math.PI }, // right correct
    { url: '/artworks/12.jpg', width: 10, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 114.99, y: 5, z: -13 }, rotation: -Math.PI / 2 },
    { url: '/artworks/13.jpg', width: 7, height: 10, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 114.99, y: 5, z: 13 }, rotation: -Math.PI / 2 }, // this should be big back wall room 2
    { url: '/artworks/14.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 65.1, y: 5, z: -20 }, rotation: Math.PI / 2 },
    { url: '/artworks/15.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 65.1, y: 5, z: 20 }, rotation: Math.PI / 2 },
  ];

  let paintingObjects = [];

  paintings.forEach(({ url, width, height, position, info, rotation }) => {
    const painting = createPainting(url, width, height, position, info, rotation);

    paintingObjects.push(painting);
    scene.add(painting);
  });

  return paintingObjects;
}
