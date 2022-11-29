const color = document.querySelector(".color");
const resetBut = document.querySelector(".reset");
const rainbowBut = document.querySelector(".rainbow");
const colorModeBut = document.querySelector(".colorMode");
const eraserBut = document.querySelector(".eraser");
let currentMode = 1;

function populateBoard(size) {
  const container = document.querySelector(".sketch-container");
  let squares = container.querySelectorAll(".div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = "transparent";
    square.addEventListener("mouseover", colorSquare);
    container.append(square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    alert("Too many! Maximum is 100");
  }
  clearFunction();
}

function colorSquare() {
  if (currentMode === 1) {
    this.style.backgroundColor = color.value;
  } else if (currentMode === 2) {
    const array = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "darkblue",
      "violet",
    ];
    this.style.backgroundColor =
      array[Math.floor(Math.random() * array.length)];
  } else if (currentMode === 3) {
    this.style.backgroundColor = "white";
  }
}

resetBut.addEventListener("click", clearFunction);

function clearFunction() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function deletePicked() {
  const buts = document.querySelectorAll(".but");
  buts.forEach((but) => {
    but.classList.remove("picked");
  });
}

rainbowBut.addEventListener("click", () => {
  deletePicked();
  rainbowBut.classList.add("picked");
  currentMode = 2;
});

colorModeBut.addEventListener("click", () => {
  deletePicked();
  colorModeBut.classList.add("picked");
  currentMode = 1;
});

eraserBut.addEventListener("click", () => {
  deletePicked();
  eraserBut.classList.add("picked");
  currentMode = 3;
});
