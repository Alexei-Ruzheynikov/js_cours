"use strict";

// Имя функции - глагол
// Такую функцию можно вызвать до и после объявления, считается, что она находится в 0 строке, т.к сразу читается программой
// function outputMessage(name, age) {
//   console.log("Hello " + name);
//   console.log("My age " + age);
// }
// outputMessage("Max", 30);

//Такую функцию можно вызвать только после ее объявления
// const consoleMessage = function () {
//   console.log("Hello, friend!");
// };
// consoleMessage();

//3 способ объявления функции с помощью конструкции. Этот способ редко используется
// const alertMessage = new Function('alert("Hi")');
// alertMessage();

//Негласное правило функций - одна функция - одно действие

// let res = 0;
// const sum = function (a, b) {
//   //   res = a + b;
//   return a + b;
// };
// // sum(3, 5);
// // console.log(res);
// let res = sum(3, 5);
// console.log("res ", res);

// Добавление к практики 1 код и 2 код в видео - конец видео
// let showTypeOf = function (data) {
//   console.log(data, typeof data);
// };
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

//Это анонинмная функция т.к. после function нет названия функции
// const sum = function (a, b) {
//   return a + b;
// };

// Тоже анонимная функция
// const sum2 = new Function("a", "b", "return a + b");

//Именованная функция.  Если после function есть  имя - это именованная функция.
// function sum3(a, b) {
//   return a + b;
// }

// console.log(sum);
// console.log(sum2);
// console.log(sum3);

//Callback функции - 1 пример
// const doNum = function (a, b, callback) {
//   if (typeof a === "number" && typeof b === "number") {
//     callback(a, b);
//   }
// };

// doNum(5, 10, function (a, b) {
//   console.log(a + b);
// });

// function mult(a, b) {
//   console.log(a * b);
// }
// doNum(3, 5, mult);

// Тоесть callback функции - это когда 1 функция прописывается в другой и очередность выполнения соблбюдается, даже если есть например задержка выполнения как в примере(1 сек)
// Callback функция - всегда передается в другую функцию и выполняется после выполнения той функции
// function one(callback) {
//   console.log("Делаем запрос на сервер");
//   setTimeout(function () {
//     console.log("Получаем данные от сервера");
//     callback();
//   }, 1000);
// }
// function two() {
//   console.log("Выводим на страницу");
// }
// one(two);

//детерминированная функция - зависит только от входных данных

function foo(a, b) {
  const sum = a + b;
  return sum;
}
console.log(foo(2, 3));

//Чистая функция не должна иметь побочных эффектов( не должна не от чего зависеть в  том числе) - выводить console.log, менять значение переменных вне функции, использовать внешние переменные и должна быть детерменированной
// Чистые функции нужны для отладки, понимания и тестирования.
