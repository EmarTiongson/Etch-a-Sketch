const container = document.querySelector(".container");
const numOfSquares = document.querySelector(".numOfSquares");
const reset = document.querySelector(".reset");
const random = document.querySelector(".random");
const checkBox = document.querySelector("#toggleCheckbox");

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
  if (newSize > 100 || newSize < 0) {
    alert("You entenred an invalid number, must be 1-100 only");
    exit;
  }
  generateSquares(newSize);
}

function changeColor(item) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  if (checkBox.checked) item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  else item.style.backgroundColor = "black";
}

function resetGrid() {
  generateSquares(currentSize);
}

numOfSquares.addEventListener("click", () => askGrid());
reset.addEventListener("click", () => resetGrid());

generateSquares(currentSize);
