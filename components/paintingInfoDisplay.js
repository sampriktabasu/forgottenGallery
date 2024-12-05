// Display painting info in the DOM
export const displayPaintingInfo = (painting_Info) => {
    const infoElement = document.getElementById('painting-info'); // Get the DOM reference
  
    // Set the html content inside info element
    infoElement.innerHTML = `
      <h3>${info.title}</h3>
      <p>Artist: ${info.artist}</p>
      <p>Description: ${info.description}</p>
      <p>Year: ${info.year}</p>
    `;
    infoElement.classList.add('show'); // Add the show info class to the DOM
  };
  
  // Hide painting info in the DOM
  export const hidePaintingInfo = () => {
    const infoElement = document.getElementById('painting-info'); // Get the reference
    infoElement.classList.remove('show'); // Remove the show class
  };
  