import * as THREE from 'three';
//import { displayPaintingInfo } from './components/paintingInfoDisplay.js';

const mouse = new THREE.Vector2();
// get raycaster library
const raycaster = new THREE.Raycaster();
function paintingClickHandling(renderer, camera, paintings) {
  renderer.domElement.addEventListener(
    'click',
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, paintings);
    },
    false
  );
}
function onClick(camera, paintings) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(paintings);
  if (intersects.length > 0) {
    const painting = intersects[0].object;
    // open modal
    console.log('Clicked painting:', painting.userData.information.title);
    //displayPaintingInfo(painting.userData.information);
  }
}
export { paintingClickHandling };