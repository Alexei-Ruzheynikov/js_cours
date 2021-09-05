"use strict";
console.time("1");
let date = new Date();
var day = date.getDay();
var elem = document.getElementById("elem");
var elemTo = document.getElementById("elemTo");

function showDay(day) {
  var days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return days[day];
}
function monthName(num) {
  var month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return month[num];
}
function showHours() {
  switch (date.getHours()) {
    case 1:
    case 21:
      return date.getHours() + " час ";
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
      return date.getHours() + " часа ";
    default:
      return date.getHours() + " часов ";
  }
}

function showTime(time, interval) {
  if (time == 1 || time == 21 || time == 31 || time == 41 || time == 51) {
    return time + " " + interval + "а ";
  } else if (
    (time >= 2 && time <= 4) ||
    (time >= 22 && time <= 24) ||
    (time >= 32 && time <= 34) ||
    (time >= 42 && time <= 44) ||
    (time >= 52 && time <= 54)
  ) {
    return time + " " + interval + "ы ";
  } else {
    return time + " " + interval + " ";
  }
}

function getZero(num) {
  if (num > 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function oneTask() {
  date = new Date();
  elem.innerHTML =
    "Сегодня " +
    showDay(day) +
    ", " +
    date.getDate() +
    " " +
    monthName(date.getMonth()) +
    " " +
    date.getFullYear() +
    " год " +
    showHours() +
    showTime(date.getMinutes(), "минут") +
    showTime(date.getSeconds(), "секунд");
}

function twoTask() {
  date = new Date();
  elemTo.innerHTML =
    getZero(date.getHours()) +
    ":" +
    getZero(date.getMinutes()) +
    ":" +
    getZero(date.getSeconds()) +
    " " +
    getZero(date.getDate()) +
    "." +
    getZero(date.getMonth() + 1) +
    "." +
    date.getFullYear();
}

window.setInterval(oneTask, 1000);
window.setInterval(twoTask, 1000);
console.timeEnd("1");
