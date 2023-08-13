function createGrid(squaresInRow) {

  const container = document.querySelector('#container');
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
createGrid(16);


