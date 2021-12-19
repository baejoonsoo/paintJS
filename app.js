const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("brachSize");
const mode = document.getElementById("FillMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleColorClick = (event) => {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

const stopPainting = () => {
  painting = false;
};

const startPainting = () => {
  painting = true;
};

const handleRangeChange = (event) => {
  ctx.lineWidth = event.target.value;
};

const handleModeClick = () => {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

const handelCanvasClick = () => {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handelCanvasClick);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
