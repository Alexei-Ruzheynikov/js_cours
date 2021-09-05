"use strict";

const button = document.querySelector("button");
const collection = document.querySelector("ul");
const elems = document.querySelector("li");
const input = document.querySelector("input");
button.addEventListener("click", func);
function func() {
  collection.insertAdjacentHTML("beforeend", "<li>" + input.value + "</li>");
}
