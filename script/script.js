//Дожидается загрузки dom дерева
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");
    function addZerro(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    }
    function getTimeRemaining() {
      //сколько милисекунд до назначенной даты
      let dateStop = new Date(deadline).getTime(),
        // сколько милисекунд до текущего момента
        dateNow = new Date().getTime(),
        // вычисляем разницу между назначенной датой и текущим моментом и переводим ее в секунды
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = addZerro(Math.floor(timeRemaining % 60)),
        minutes = addZerro(Math.floor((timeRemaining / 60) % 60)),
        hours = addZerro(Math.floor(timeRemaining / 60 / 60));
      //   hours = Math.floor(timeRemaining / 60 / 60) % 24,
      //   day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining: timeRemaining,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      }
      if (timer.timeRemaining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }
  countTimer("01 oct 2021");
});
