"use strict";

const button = document.querySelector("button");
const collection = document.querySelector("ul");
const input = document.querySelector("input");
button.addEventListener("click", func);
function func() {
  collection.insertAdjacentHTML("beforeend", "<li>" + input.value + "</li>");
}

// function getListContent() {
//   let result = [];

//   for (let i = 1; i <= 3; i++) {
//     let li = document.createElement("li");
//     li.append(i);
//     result.push(li);
//   }

//   return result;
// }

// ul.append(...getListContent());
