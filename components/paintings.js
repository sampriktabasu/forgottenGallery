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
    pos: position,
    rot: rotation,
    width: width,
    height: height
  };

  return painting;
}

export const paintings = [
  { url: '/artworks/0.jpg', width: 10, height: 5, info: {title: 'Starry Night', artist: 'Vincent van Gogh', description: 'This is one of Vincent van Gogh’s most iconic masterpieces, capturing the swirling energy of a starlit night with bold brushstrokes and vibrant colors, evoking both turbulence and tranquility.', year: '1889'}, position: { x: -8.5, y: 5, z: -19.99 }, rotation: 0 },
  { url: '/artworks/1.jpg', width: 10, height: 5, info: {title: 'starry night', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 8.5, y: 5, z: -19.99 }, rotation: 0 },
  { url: '/artworks/2.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -19.99, y: 5, z: -8.5 }, rotation: Math.PI / 2 },
  { url: '/artworks/3.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: -19.99, y: 5, z: 8.5 }, rotation: Math.PI / 2 },
  { url: '/artworks/4.jpg', width: 7, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 19.99, y: 3, z: -13.5 }, rotation: -Math.PI / 2 },
  { url: '/artworks/5.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 19.99, y: 5, z: 14 }, rotation: -Math.PI / 2 },
  { url: '/artworks/6.jpg', width: 10, height: 5, info: {title: 'White Blossoms in Blue', artist: 'Claude Monet', description: 'This impressionist painting features delicate white flowers elegantly arranged in a vase, surrounded by a sea of rich blue hues. Monet’s soft brushstrokes bring the blossoms to life, creating a serene yet vibrant atmosphere.', year: '1885'}, position: { x: -8.5, y: 5, z: 19.99 }, rotation: Math.PI },
  { url: '/artworks/7.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 8.5, y: 5, z: 19.99 }, rotation: Math.PI },
  { url: '/artworks/8.jpg', width: 10, height: 5, info: {title: 'Self-Portrait', artist: 'Claude Monet', description: 'This impressionist self-portrait by Claude Monet captures the artist’s contemplative expression with soft, flowing brushstrokes. The subtle interplay of light and shadow highlights Monet’s connection to nature, while the muted yet dynamic palette reflects his introspective and innovative spirit.', year: '1886'}, position: { x: 80, y: 5, z: -39.99 }, rotation: 0 }, // correct // left
  { url: '/artworks/9.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 100, y: 5, z: -39.99 }, rotation: 0 }, // correct // left  
  { url: '/artworks/10.jpg', width: 10, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 114.99, y: 3, z: -22 }, rotation: -Math.PI / 2 },
  { url: '/artworks/11.jpg', width: 10, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 114.99, y: 3, z: 0 }, rotation: -Math.PI / 2 },
  { url: '/artworks/12.jpg', width: 10, height: 9, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 114.99, y: 3, z: 22 }, rotation: -Math.PI / 2 }, // this should be big back wall room 2
  { url: '/artworks/14.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 65.1, y: 5, z: -20 }, rotation: Math.PI / 2 },
  { url: '/artworks/15.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 65.1, y: 5, z: 20 }, rotation: Math.PI / 2 },
  { url: '/artworks/10.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 80, y: 8, z: 39.99 }, rotation: Math.PI }, // rigth ? correct
  { url: '/artworks/11.jpg', width: 10, height: 5, info: {title: 'Wisdom Revealed', artist: 'Raphael', description: 'This Renaissance masterpiece depicts a philosopher guiding a winged child through the pages of a book, symbolizing the pursuit of knowledge. To the right, a serene woman cradles a baby, embodying maternal grace and divine purity. The intricate details and soft interplay of light evoke a timeless sense of wonder and reverence.', year: '1512'}, position: { x: 100, y: 5, z: 39.99 }, rotation: Math.PI }, // right correct
  // hallway
  { url: '/artworks/21.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 50, y: 4, z: 7.3 }, rotation: Math.PI }, // hallaway right?  // 21 
  { url: '/artworks/22.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 30, y: 4, z: 7.3 }, rotation: Math.PI }, // hallway right
  { url: '/artworks/23.jpg', width: 10, height: 5, info: {title: 'The Persistence of Memory', artist: 'Salvador Dalí', description: 'This iconic surrealist painting by Salvador Dalí depicts a dreamlike landscape where melting clocks drape over strange objects, symbolizing the fluidity and distortion of time. The eerie yet captivating scene challenges the viewer’s perception of reality and remains one of Dalí’s most celebrated works.', year: '1931'}, position: { x: 50, y: 4, z: -7.4 }, rotation: 0 }, // hallway left 
  { url: '/artworks/24.jpg', width: 10, height: 5, info: {title: 'Van Gogh', artist: 'Vincent van Gogh', description: 'This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty.', year: '2021'}, position: { x: 30, y: 4, z: -7.4 }, rotation: 0 }, //hallway left  // lady 
];

export function addPaintings(scene) {

  let paintingObjects = [];

  paintings.forEach(({ url, width, height, position, info, rotation }) => {
    const painting = createPainting(url, width, height, position, info, rotation);

    paintingObjects.push(painting);
    scene.add(painting);
  });

  return paintingObjects;
}
