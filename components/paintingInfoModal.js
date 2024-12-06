export function displayPaintingInfo(info) {
    const modalOverlay = document.getElementById('painting-modal-overlay');
    const modalElement = document.getElementById('modal');

    modalElement.innerHTML = `
    <div class="modal" id="modal">
        <button class="modal-close" id="closeModal">&times;</button>
        <div class="modal-header" id="paintingTitle">${info.title}</div>
        <div><strong>Artist:</strong> <span id="paintingArtist">${info.artist}</span></div>
        <div><strong>Description:</strong> <span id="paintingDescription">${info.description}</span></div>
        <div><strong>Year:</strong> <span id="paintingYear">${info.year}</span></div>
    </div>`

    modalElement.style.display = 'block';
    modalOverlay.style.display = 'block';
}