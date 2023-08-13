const container = document.querySelector('#container');

function createGrid(squaresInRow) {

  let squareSize = 800 / squaresInRow;

    for(i = 0; i < squaresInRow * squaresInRow; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
      square.addEventListener('mouseenter', (e) => {
        e.target.classList.add('hover-color');
      });
    }

}

function setSquaresPerSide() {
  if (container.hasChildNodes) {
    removeGrid();
  }
  let squaresInRow = prompt('How many squares per side?');
  createGrid(squaresInRow);
}

function removeGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

document.querySelector('button').addEventListener('click', () => {
  setSquaresPerSide();
});



