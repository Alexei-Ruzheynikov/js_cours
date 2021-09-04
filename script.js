"use strict";

//Функции высшего порядка

//Эта функция - функция высшего порядка, т.к. она принимает callback функцию ( если функция принимает другую функцию - то это функция высшего порядка)
// function foo(data, callback) {
//   if (typeof data === "string") {
//     callback(data, "строка");
//   } else {
//     callback(data, "не строка");
//   }
// }
// foo(123, function (db, res) {
//   console.log(db, res);
// });

//
//

// const bar = function (a) {
//   const b = "второго замкнуло";
//   return function (c) {
//     console.log(a, b, c);
//   };
// };
// const foo = bar("первый замкнут");
// console.log(foo);
// foo("Третий не замкнут");

//
//

// Ченинг простой пример
// const foo = function (a) {
//   const x = a * a;
//   return function (b) {
//     const y = a / b;

//     return function (c) {
//       return x + y + c;
//     };
//   };
// };
// const foo1 = foo(4);
// console.log("foo1: ", foo1);
// const foo2 = foo1(2);
// console.log("foo2: ", foo2);
// const foo3 = foo2(3);
// console.log("foo3: ", foo3);

// const bar = foo(10)(2);
// console.log("bar: ", bar);
// console.log("bar: ", bar(95));

//
//
// const foo = function () {
//   const arr = [];
//   return function (a) {
//     arr.push(a);
//     console.log(arr);
//   };
// };
// const foo1 = foo();
// const foo2 = foo();

// foo1(1);
// foo2(1);

// foo1(45);
// foo1(["a", "b"]);

// foo1("dsgag");
// foo1({ a: 1 });
// foo1([1, 2, 3]);

// foo2(1);

//
//

// const foo = function () {
//   const cache = {};
//   return function (key) {
//     if (cache[key]) {
//       console.log(key + " уже есть в кэш");
//     } else {
//       cache[key] = "val: " + key;
//       console.log(cache);
//     }
//   };
// };

// const foo1 = foo();
// const foo2 = foo();

// foo1(5);
// foo1("Hello");
// foo1("5");
// foo2(5);
// foo2(2);

// foo1(5);
// foo2(2);
// foo1("hello");
// foo2("hi");
// foo1(10);

//
//

// const logger = function (cb) {
//   return function () {
//     const args = Array.prototype.slice.call(arguments);
//     const res = cb.apply(null, args);
//     console.log(
//       "Вызов функции: " +
//         cb.name +
//         ". С аргументами: " +
//         args +
//         ". Результат вызова: " +
//         res
//     );
//     return res;
//   };
// };
// const sum = function (a, b, c) {
//   return a + b + c;
// };

// const sumLog = logger(sum);
// sumLog(2, 4, 6);

//
//

// function foo() {
//   const args = Array.prototype.slice.call(arguments);
//   console.log("args: ", args);
// }

// foo(123, 234, 345);

//
//
//При получении данных с сервера в большом объеме перебирать этой функции, она асинхорнна
// const eacher = function (arr, callback) {
//   let count = 0;
//   const timer = setInterval(function () {
//     callback(arr[count++]);
//     if (count >= arr.length) clearInterval(timer);
//   }, 0);
// };

// const names = [
//   "Максим",
//   "Андрей",
//   "Артем",
//   "Екатерина",
//   "Вероника",
//   "Каролина",
// ];
// const names2 = [
//   "1Максим",
//   "1Андрей",
//   "1Артем",
//   "Екатерина",
//   "Вероника",
//   "Каролина",
// ];

// const named = function (name) {
//   console.log("Имя: " + name);
// };

// eacher(names2, named);

// names.forEach(named);
// named("Борис");

//Разбор 6 домашнего задания сразу с усложненным заданием

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numCheck = function (n) {
  return !isNaN(parseInt(n)) && isFinite(n);
};

const getNumber = function (str) {
  const numUser = prompt(str);
  if (numUser === null) return null;
  if (numCheck(numUser)) {
    return +numUser;
  }
  alert("Кажется вы забыли ввести число, попробуйте еще раз!");
  getNumber(str);
};

const getCounter = function () {
  let counter = 0;
  return function () {
    return counter++;
  };
};

const gameBot = function (attemps, min, max) {
  attemps = attemps || 10;
  min = min || 0;
  max = max || 100;

  const random = getRandomInt(min, max);
  const counter = getCounter();

  return function checkNumber() {
    const count = counter();

    if (count < attemps) {
      const number = getNumber(
        "Попробуйте угадать число от " + min + " до " + max
      );
      if (number === null) return alert("Досвидание");
      if (number > random) {
        alert("Загаданное число меньше чем ваше!");
        return checkNumber();
      }
      if (number < random) {
        alert("Загаданное число больше чем ваше!");
        return checkNumber();
      }
      if (number === random) {
        alert("Молодец! Угадал!");
      }
    } else {
      alert("Количество попыток закончилось! было загадано число " + random);
    }
    const questAC = confirm("Хотите сыграть еще?");
    if (questAC) {
      alert("Отлично, начинаем!");
      gameBot(attemps, min, max)();
    } else {
      alert("Спасибо за игру, еще увидимся!");
    }
  };
};
const foo = gameBot(10, 0, 10);
foo();
