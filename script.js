"use strict";

const inputText = document.getElementById("myText"),
  myBtn = document.getElementById("myBtn"),
  text = document.getElementById("text");

// const showText = function () {
//   text.textContent = localStorage.myText;
// };

// myBtn.addEventListener("click", function () {
//   localStorage.myText = inputText.value;
//   showText();
// });
// showText();

//
//

// const showText = function () {
//   text.textContent = sessionStorage.myText;
// };

// myBtn.addEventListener("click", function () {
//   sessionStorage.myText = inputText.value;
//   showText();
// });
// showText();

// sessionStorage - сохраняет только на время сессии (только пока открыта вкладка)
//localStorage - хранится вечно, пока не будет удалена вручную или через javascript

//
//

// const showText = function () {
//   text.textContent = localStorage.getItem("memory");
// };

// myBtn.addEventListener("click", function () {
//   localStorage.setItem("memory", inputText.value);
//   showText();
// });

// localStorage.removeItem("myText");

// showText();

// Через setItem создаем , через getItem - получаем, removeItem - удаление какой-то localStorage

//
//
//

// document.cookie = "имя=значение";
// document.cookie = "имя2=значение2";
// document.cookie = "имя3=значение3";
// document.cookie = "имя=значение4";
// document.cookie = "hope=life; expires=Tue, 7 May 2024 00:00:00 GMT";

function setCookie(key, value, year, month, day, path, domain, secure) {
  let cookieStr = encodeURI(key) + "=" + encodeURI(value);
  if (year) {
    const expires = new Date(year, month - 1, day);
    cookieStr += "; expires=" + expires.toGMTString();
  }
  cookieStr += path ? "; path=" + encodeURI(path) : "";
  cookieStr += domain ? "; domain=" + encodeURI(domain) : "";
  cookieStr += secure ? "; secure=" : "";

  document.cookie = cookieStr;
}

setCookie("Привет", "Мир");
setCookie("Любимый праздник детей", "Новый год", 2022, 1, 1);

console.log(decodeURI(document.cookie));
//По умолчанию cookie сохраняются на 1 сессию - это значит, что при перезаходе их не будет
