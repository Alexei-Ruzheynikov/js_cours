"use strict";

// let square = document.querySelector(".square");
// console.dir(square);
// let count = 0;

// square.onclick = function () {
//   if (count === 3) {
//     console.log("Опачки");
//     square.onclick = null;
//     return;
//   }
//   count++;
//   console.log("Вы кликнули на квадрат");
// };

// square.onclick = function () {
//   console.log("Это 2 функция");
// };

// let clicked = function () {
//   count++;
//   if (count === 3) square.removeEventListener("click", clicked);
//   console.log("Произошел клик по квадрату");
// };

// square.addEventListener("click", clicked);

// square.addEventListener("click", function () {
//   console.log("Произошел клик по квадрату 2 ");
// });
// square.addEventListener("click", function () {
//   console.log("Произошел клик по квадрату 3");
// });

//
//

// let square = document.querySelector(".square");

// let eventFunc = function (event) {
//   console.log(event.type);
// };

// square.addEventListener("click", eventFunc);

//mouseup - при нажатии мышки, когда отпускаешь ее
// square.addEventListener("mouseup", eventFunc);
//mousedown -нажимаем кнопку мыши но не отпускаем на объекте
// square.addEventListener("mousedown", eventFunc);
//mousemove - событие наведение на объект
// square.addEventListener("mousemove", eventFunc);

//mouseenter - когда мышку заводим на наш объект
// square.addEventListener("mouseenter", eventFunc);
//mouseleave - когда мышку уводим с объекта
// square.addEventListener("mouseleave", eventFunc);
//mouseover -  сраатывае при наведении на внутренний элемент какого-либо объекта
// square.addEventListener("mouseover", eventFunc);
//mouseout - сраатывае при уходе с элемента и его дочерних элементов какого-либо объекта
// square.addEventListener("mouseout", eventFunc);

//
//
//DOMContentLoaded когда страница загружена запускает скрипты, обычно оборачивают весь код js в эту конструкцию
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Страница загрузилась");
// });

// let eventFunc = function (event) {
//   console.log(event.type);
//   console.log(event.target.value);
// };
//input - когда меняем value у input
// document.querySelector("#text").addEventListener("input", eventFunc);
//change - срабатывает, когда после ввода в input убираем фокус(кликаем в другом мместе кроме inputа)
// keyup - отпускаем кнопку
// document.querySelector("#text").addEventListener("keyup", eventFunc);
//keydown - нажимаем кнопку
// document.querySelector("#text").addEventListener("keydown", eventFunc);
//focus - когда кликаем на элементи  у нас появляется возможность вводить текст
// document.querySelector("#text").addEventListener("focus", eventFunc);
//blur - когда теряем фокус
// document.querySelector("#text").addEventListener("blur", eventFunc);
//change - при изменении значения отрабатывает change для type range
// document.querySelector("#range").addEventListener("change", eventFunc);

// document.querySelector("#link").addEventListener("click", function (event) {
//   //preventDefault - отменяет стандартное поведение
//   event.preventDefault();
//   console.log("click");
// });

//
//
//contextmenu - отменяет меню при клике правой кнопки мыши - можем создать свое!
// document.addEventListener("contextmenu", function (event) {
//   //preventDefault - отменяет стандартное поведение
//   event.preventDefault();
//   console.log("click");
// });

let clickElem = null;
function greenHundler(event) {
  if (clickElem) {
    clickElem.classList.remove("green");
  }
  clickElem = event.currentTarget;
  clickElem.classList.add("green");
}
//всплытие, а захват событие - пишем еще true
document
  .querySelector(".event_btn")
  .addEventListener("click", greenHundler, true);
document.querySelector("body").addEventListener("click", greenHundler, true);
