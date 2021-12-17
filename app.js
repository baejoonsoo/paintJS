const canvas = document.getElementById("jsCanvas");

let painting = false;

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(`{${x},${y}}`);
};

const onMouseDown = () => {
  painting = true;
};

const stopPainting = () => {
  painting = false;
};

const onMouseUp = () => {
  stopPainting;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
