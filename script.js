"use strict";

// const heder = document.querySelector("h1"),
//   link = document.getElementById("googl"),
//   img = document.querySelector("img");

// img.setAttribute("alt", "logotype");
// img.removeAttribute("alt");

// console.log(heder.attributes);
// console.log(link.attributes);
// console.log(img.hasAttribute("alt"));

// img.className = "new_img img";
// console.log(img.className);

// img.classList.add("pic");
// img.classList.remove("image");

// img.classList.toggle("new_img");

// console.log(img.classList.contains("image"));
//
//

// heder.dataset.aboutHeader = "заголовок";

// console.log(img.dataset);

// img.addEventListener("mouseenter", (e) => {
//   event.target.src = event.target.dataset.img;
// });

//
//

// const reg = /привет/;

// const reg2 = new RegExp("привет");

// // есть ли регулярное выражение
// console.log(reg.test("всем привет, добро пожаловать"));
// console.log(reg.test("всем добро пожаловать"));

// // есть ли регулярное выражение
// console.log(/привет/.test("всем привет, добро пожаловать"));
// console.log(/привет/.test("всем добро пожаловать"));

// // ^- начинается ли с регулярного выражения
// console.log(/^привет/.test("всем привет, добро пожаловать"));
// console.log(/^привет/.test("всем добро пожаловать"));

// $ есть ли  регулярка в конце
// console.log(/привет$/.test("всем привет, добро пожаловать"));
// console.log(/привет$/.test("всем привет"));

// console.log(reg2);

// // начинается и заканчивается регуляркой
// console.log(/^привет$/.test("всем привет, добро пожаловать"));
// console.log(/^привет$/.test("привет"));

//
//
//поиск элемента в подстроке - выдаст инджекс, флаг i игнорирует регистр, флаг g - получаем массив из всех подстрок в строке и выдает их в виже массива
const string = `Привет друг, добро пожаловать, прошу проходите
мой номер телефона 8-999-123-45-67 номер домофона 55
девушка
дедушка
номера
номераа
номераааааа
+79876543271
master@yandex.ru
+7(999)123-4567
boss@gmail.com
<div class='best'>Привет мир</div>`;
// const string3 = `Hello friend, welcome, please come through 24235_`;

// Спецсимволы необходимо экранировать при поиске
// const string2 = "спецсимволы: + * . ^ $ ][ {} () ? / ";
// const result = string2.match(/\+/);

// const result = string.match(/п/);

// const result = string.match(/[А-Яа-яЁё]/g);
// const result = string3.match(/[a-z]/gi);
// const result = string.match(/[^0-9]/gi);

//получаем все цифры
// const result = string.match(/\d/gi);

//получаем не цифры
// const result = string.match(/\D/gi);

//Все пустые символы
// const result = string.match(/\s/gi);

//Все символы без пустот(переносов,пробелов)
// const result = string.match(/\S/g);

// все буквы, цифры и подчеркивания для английского
// const result = string3.match(/\w/gi);

// const result = string.match(/(теле|домо)фона/gi);

// const result = string.match(/де[вд]ушка/gi);

// ? или последний символ или без него
// const result = string.match(/номера?/gi);

// + буква а должна быть обязательна
// const result = string.match(/номера+/gi);

// * а может присутствовать а может и нет
// const result = string.match(/номера*/gi);

//конкретное количесвто последней буквы
// const result = string.match(/номера{2}/gi);

// const result = string.match(/номера{0,4}/gi);

// const result = string.match(/о.{1,3}о/gi);

// const result = string.match(/<.+>/gi);

// const result = string.match(/<.+?>/gi);

// const result = string.match(/номер(?= домофона)/gi);

// const result = string.match(/номер(?! домофона)/gi);

// search - вернет индекс найденное подстроки
// const result = string.search(/номер/);

// const email = string.match(/\w+@\w+\.\w{2,3}/g);

// если search не найдет, вернет -1
// const email = string.search(/\w+@\w+\.\w{2,3}/g);

// const mobile = string.match(/\+?[78]([-()]*\d){10}/g);
// const mobile = string.replace(/\+?[78]([-()]*\d){10}/g, "***");

// const res = string.split(/[\s,]+/);

// console.log(res);

// console.log(email);
// console.log(mobile);

// console.log(result);

//
//
//

const input = document.querySelector("input"),
  output = document.querySelector(".output");

input.addEventListener("input", () => {
  let text = input.value;
  // output.textContent = text.replace(/\d/g, "");
  // output.textContent = text.replace(/\D/g, "");
  // output.textContent = text.replace(/максим/gi, (match) => match.toUpperCase());
  output.textContent = text.replace(
    /(\w+)@(\w+\.\w{2,3})/gi,
    (match, val1, val2) => val2
  );
});
