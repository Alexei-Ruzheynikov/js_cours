"use strict";

// //Миксины
// {
//   const obj = {
//     name: "Василий",
//     goWork: function () {
//       console.log(this.name + " пошел на работу");
//     },
//     goHome: function () {
//       console.log(this.name + " пошел домой");
//     },
//   };

//   const goRelax = function () {
//     console.log(this.name + " пошел отдыхать");
//   };

//   const nameWife = "Жанна";

//   const nameSon = "Лионель";
//   const nameDauhter = "Августина";

//   // Так добавляются новые свойства в объект, называется -миксины
//   Object.assign(obj, { goRelax, nameWife }, { nameSon, nameDauhter });
//   console.log(obj);
// }

// //Декоратор
// {
//   const mixinCalcCost = function (obj) {
//     obj.quantity = obj.quantity || 0;
//     obj.calcCost = function (price) {
//       obj.price = price;
//       return price * obj.quantity;
//     };
//   };

//   const arr = [
//     {
//       name: "Шорты",
//       quantity: 10,
//     },
//     {
//       name: "Носки",
//       quantity: 20,
//     },
//     {
//       name: "Тапки",
//     },
//   ];
//   // mixinCalcCost(arr[0]);
//   // console.log(arr);

//   arr.forEach(mixinCalcCost);

//   console.log(arr[0].calcCost(50));
//   console.log(arr[1].calcCost(10));
//   console.log(arr[2].calcCost(50));
// }
// {
//   const wrapper = function (fn) {
//     console.log("Оборачиваем функцию: ", fn.name);
//     return function () {
//       const args = Array.from(arguments);
//       console.log("Вызов обертки для: ", fn.name);
//       console.log("Аргументы:", args);
//       const result = fn.apply(null, args);
//       console.log("Результат выполнения функции", fn.name, result);
//       return result;
//     };
//   };
//   const foo = function (a, b) {
//     return a + b;
//   };
//   const bar = wrapper(foo);
//   console.log(bar(5, 15));
// }

//
//
//
