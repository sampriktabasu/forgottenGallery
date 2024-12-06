// Display painting info in the DOM
export const displayPaintingInfo = (painting_Info) => {
    const infoElement = document.getElementById('painting-info'); // Get the DOM reference
  
    // Set the html content inside info element
    infoElement.innerHTML = `
      <section class="modal hidden painting-modal">
        <div class="flex">
            <img src="user.png" width="50px" height="50px" alt="user" />
            <button class="btn-close" onclick = "closePaintingInfo()">⨉</button>
        </div>
        <div>
            <h3>Vincent van Gogh</h3>
            <p> This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. </p>
        </div>
    </section>
    <script>
        function closeModal() {
            const modal = document.getElementById('painting-modal');
            modal.style.display = "none";
        }
    </script>

    `;
    infoElement.classList.add('show'); // Add the show info class to the DOM
  };
  
  // Hide painting info in the DOM
  export const hidePaintingInfo = () => {
    const infoElement = document.getElementById('painting-info'); // Get the reference
    infoElement.classList.remove('show'); // Remove the show class
  };
  