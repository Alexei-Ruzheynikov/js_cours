"use strict";
// Задача 1
let lang = "ru";
let weekRu = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let weekEn = ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"];

if (lang === "ru") {
  console.log(weekRu);
} else if (lang === "en") {
  console.log(weekEn);
}

switch (lang) {
  case "ru":
    console.log(weekRu);
    break;
  case "en":
    console.log(weekEn);
    break;
  default:
    break;
}

let arrLang = {
  ru: weekRu,
  en: weekEn,
};
console.log(arrLang[lang]);

console.error("--------");
// Задача 2

let namePerson = "Артем";
if (namePerson === "Артем") {
  console.log("Директор");
} else if (namePerson === "Максим") {
  console.log("Преподаватель");
} else {
  console.log("Студент");
}

namePerson === "Артем"
  ? console.log("Директор")
  : namePerson === "Максим"
  ? console.log("Преподаватель")
  : console.log("Студент");
