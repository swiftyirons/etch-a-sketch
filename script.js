function createRow(numberOfSquares) {

  const container = document.querySelector("#container");

  for(i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(j = 0; j < numberOfSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
      square.addEventListener("mouseenter", (event) => {
        event.target.classList.add("gold");
      });
    }

  }
}


createRow(16);

//  square.addEventListener("mouseenter", function(e) {
//    e.target.classList.add("gold");
//  });

