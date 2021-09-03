"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let count = getCounter();

function gameBot() {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  return function () {
    let userNumber = prompt("Угадай число от 1 до 100");
    if (userNumber === null) {
      alert("Игра окончена");
    } else if (isNumber(userNumber)) {
      if (+userNumber > randomNumber) {
        alert("Загаданное число меньше");
        count();
      } else if (+userNumber < randomNumber) {
        alert("Загаданное число больше");
        count();
      } else if (+userNumber === randomNumber) {
        let newGuess = confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?");
        if (newGuess) {
          count = getCounter();
          startGame = gameBot();
          startGame();
        }
      }
      //   else {
      //     alert("Введите число");
      //     startGame();
      //   }
    } else {
      alert("Введите число");
      startGame();
    }
  };
}

let startGame = gameBot();
startGame();

function getCounter() {
  let counter = 10;
  return function () {
    counter--;
    if (counter > 1) {
      alert("Осталось попыток: " + counter);
      startGame();
    } else if (counter === 1) {
      alert("Осталась последняя попытка");
      startGame();
    } else if (counter === 0) {
      let newGuess = confirm("Попытки закончились, хотите сыграть еще?");
      if (newGuess) {
        counter = 10;
        startGame = gameBot();
        startGame();
      }
    }
    return counter;
  };
}
