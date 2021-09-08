// "use strict";

const button = document.querySelector("button");
const p = document.querySelector("p");

function newColor() {
  // let randomColor = Math.floor(Math.random() * 16111111).toString(16);
  // или
  let randomColor = Math.random().toString(16).slice(3, 9);
  document.body.style.backgroundColor = "#" + randomColor;
  p.innerHTML = "#" + randomColor;
}
button.addEventListener("click", newColor);
