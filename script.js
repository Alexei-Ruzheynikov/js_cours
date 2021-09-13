// "use strict";

// let getMessage = function (name) {
//   console.log("Привет " + name + "!");
// };

// setTimeout выполнится 1 раз
// console.log(window);
// setTimeout(function () {
//   console.log("Сообщение в консоль");
// }, 1000);

// setInterval выполнится бесконечно раз
// let count = 0;
// let idInterval = setInterval(function () {
//   count++;
//   console.log("Привет, я setInterval" + count);
// }, 2000);

// let idInterval = setInterval(getMessage, 2000, "Василий");

// clearInterval - выключает выполнеине setInterval
// в этой конструкции сброс произойдет через 6 секунд
// setTimeout(function () {
//   clearInterval(idInterval);
// }, 6000);

// let idTimeout = setTimeout(getMessage, 6000, "Иван");

//clearTimeout -выключает выполнеине setTimeout
// clearTimeout(idTimeout);

// let worm = document.querySelector(".worm"),
//   airplane = document.querySelector(".airplane"),
//   count = 0;
// let flyInterval;
// let wormDown = function () {
//   count++;
//   worm.style.top = count * 2 + "px";
//   airplane.style.left = count * 2 + "px";
//   if (count < 350) {
//     setTimeout(wormDown, 10);
//   }
// };
// wormDown();

// let wormDown = function () {
//   count++;

//   if (count < 350) {
//     worm.style.top = count * 2 + "px";
//     airplane.style.left = count * 2 + "px";
//   } else if (count < 500) {
//     airplane.style.left = count * 2 + "px";
//   } else {
//     clearInterval(idInterval);
//   }
//   console.log(count);
// };
// let idInterval = setInterval(wormDown, 10);

// let flyAnimate = function () {
//   count++;
//   flyInterval = requestAnimationFrame(flyAnimate);
//   if (count < 350) {
//     worm.style.top = count * 2 + "px";
//     airplane.style.left = count * 2 + "px";
//   } else if (count < 500) {
//     airplane.style.left = count * 2 + "px";
//   } else {
//     cancelAnimationFrame(flyInterval);
//   }
//   console.log(count);
// };
// let animate = false;
// // flyInterval = requestAnimationFrame(flyAnimate);
// document.addEventListener("click", function () {
//   if (animate) {
//     flyInterval = requestAnimationFrame(flyAnimate);
//     animate = false;
//   } else {
//     animate = true;
//     cancelAnimationFrame(flyInterval);
//   }
// });

//Текущая дата и время
// let date = new Date();
// // Можем задать свое время
// // let date = new Date("1987 10 march");
// // let date = new Date(1987, 10, 22, 9, 30, 15, 100);
// // console.log(date);
// // date.setFullYear(2000);
// console.log(date);
// console.log(date.getTime());

// // ТОлько время
// console.log(date.toTimeString());
// //Только дата
// console.log(date.toDateString());
// //В формате локализации добавляем toLocale
// console.log(date.toLocaleTimeString("ru"));
// console.log(date.toLocaleDateString("ru"));

// //Метод now() - выведет количество сепкунд с 1970 до настоящего времени
// console.log(Date.now());

// // Метод parse - выведет с 1970 до даты указанной в скобках
// console.log(Date.parse("10 march 1980"));

// console.log("год " + date.getFullYear());
// console.log("месяц " + (date.getMonth() + 1));
// console.log("День месяца  " + date.getDate());
// console.log("День недели  " + date.getDay());
// console.log("час " + date.getHours());
// console.log("минуты " + date.getMinutes());
// console.log("секунды " + date.getSeconds());
// console.log("миллисекунды " + date.getMilliseconds());

//Что значит дата по гринвичу?

//По Eslint
// установка eslist
// npm i -g eslint
// Проверка файла на ошибки
//eslint script.js
//Автоматическое исправляет ошибки с помощью компанды -
//eslint --fix script.js
let num = 0;
console.log(num);
