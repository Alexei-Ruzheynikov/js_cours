"use strict";

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let data = new Date();

for (let i = 0; i < week.length; i++) {
  let html = week[i];
  if (i === week.length - 2) {
    console.log(week[5]);
    continue;
  }
  if (i === week.length - 1) {
    document.write(week[6].italics());
    continue;
  }
  console.log(week[i]);
}

// не доделал, пока не хватило знаний
