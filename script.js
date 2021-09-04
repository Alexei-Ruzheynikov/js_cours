"use strict";

// 6 урок важный

//Что такое магические числа?

//Решение 5 усложненного задания
// const START = 0;
// const END = 100;

// function checkPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   if (num > 1) return true;
// }

// function getPrimeNum(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (checkPrime(i)) {
//       console.log("Число " + i + " простое и его делители 1 и " + i);
//     }
//   }
// }
// getPrimeNum(START, END);

//Задача 2
// function foo(x) {
//   debugger;
//   if (x < 0) return;
//   console.log("begin: " + x);
//   foo(x - 1);
//   console.log("end: " + x);
// }
// foo(5);

//Задача 3
// function fact(x) {
//   if (x === 0) return 1;
//   return x * fact(x - 1);
// }
// console.log(fact(5));

const logger = function (fn) {
  return function () {
    const args = Array.from(arguments);
    const res = fn.apply(null, args);
  };
};

const bar = logger();
bar(1, 2, 3, 4, 5);
// console.log("bar: ", bar);

//Какие параметры принимает foreach кроме callback функций?
