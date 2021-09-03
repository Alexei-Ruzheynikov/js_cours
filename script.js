"use strict";

// let charNumb = 55;

// let isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };
// let flags;
// function flag(){
//     if (flags = false){
//         break;
//     }
// }

// let result;
// while (result !== charNumb) {
//   let num = prompt("Угадай число от 1 до 100");

//   if (num === null) {
//     alert("Игра окончена");
//     break;
//   }

//   while (!isNumber(num)) {
//     num = prompt("Введите число");
//     if (num === null) {
//       alert("Игра окончена");
//       break;
//     }
//   }
//   if (isNumber(num)) {
//     result = Number(num);
//     if (result > charNumb) {
//       alert("Загаданное число меньше");
//     } else if (result < charNumb) {
//       alert("Загаданное число больше");
//     }
//   }

//   //   break;
// }

// if (result === charNumb) {
//   alert("Поздравляю, Вы угадали!!!");
// }

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  return function () {
    let userNumber = prompt("Угадай число от 1 до 100");
    if (userNumber === null) {
      alert("Игра окончена");
    } else if (isNumber(userNumber)) {
      if (+userNumber > randomNumber) {
        alert("Загаданное число меньше");
        startGame();
      } else if (+userNumber < randomNumber) {
        alert("Загаданное число больше");
        startGame();
      } else if (+userNumber === randomNumber) {
        alert("Поздравляю, Вы угадали!!!");
      } else {
        alert("Введите число");
        startGame();
      }
    } else {
      alert("Введите число");
      startGame();
    }
  };
}
let startGame = guessNumber();
startGame();
