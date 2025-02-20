let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;

function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

    //*Second correction 
    let puzzleContainer = document.querySelector(".puzzle-pieces"); //* Removes pieces from the drop-zones and returns them to the starting area

    dropZones.forEach((zone) => {
        if (zone.firstChild) {
            puzzleContainer.appendChild(zone.firstChild); //*Move the piece back to the piece area
        }
    });
}


function handleStartDrag() {
    console.log('started dragging this piece ', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log(`dropped something on me`);

    
    if(!this.hasChildNodes()) //*firts correction
 

    this.appendChild(draggedPiece);
}

theButtons.forEach(button => button.addEventListener('click', changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));