const container = document.querySelector(".container");
const numOfSquares = document.querySelector(".numOfSquares");
const reset = document.querySelector("reset");
const random = document.querySelector("random");

let currentSize = 16;
let newSize;

function generateSquares(num) {
  container.innerHTML = " ";
  let size = 960 / num - 2;
  for (let i = 0; i <= num * num - 1; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "squares");
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.addEventListener("mouseover", () => changeColor(square));
    container.appendChild(square);
  }

  currentSize = num;
}

function askGrid() {
  newSize = prompt("Enter new grid: (1-100): ");
  generateSquares(newSize);
}
function changeColor(item) {
  item.style.backgroundColor = "black";
}

function resetGrid() {
  generateSquares(currentSize);
}

numOfSquares.addEventListener("click", () => askGrid());
reset.addEventListener("click", () => resetGrid());

generateSquares(currentSize);
