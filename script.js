"use strict";

//Api -набор доступных свойств и методов для решения задач, чаще всего реализованные в виде объектов
// Api с которыми будем работать DOM(для работы с элементами на странице),BOM(необходим для работы с браузером) и htmlxpreqvest - объект для работы с сервером и др.
//Корень DOM - document

//У document - нет родительских элементов
// console.log(document.parentElement);

//htmlcollection - псевдомассив
//У document - дочерний элемент html
// console.log(document.children);

//Для нахождения по id используем метод getElementById
// console.log(document.getElementById("main-head"));

//Метод getElementsByTagName поиск по тэгам, а в квадратных скобках указываем индекс конкретного тэга, если их много
// console.log(document.getElementsByTagName("h1")[0]);

// console.log(document.getElementsByClassName("head"));

//Рекомендуется getElementById для ID и querySelector для остальных
//querySelector - получит самый первый, который встретится в DOM дереве, .head -класс, #main-head -по ID, по тэгу - header, по атрибуту [title="Основной заголовок"]
// console.log(document.querySelector(".head"));
// console.log(document.querySelector("#main-head"));
// console.log(document.querySelector("h1"));
// console.log(document.querySelector('[title="Основной заголовок"]'));

// querySelectorAll - получим коллекцию NodeList всех элементов
// console.log(document.querySelectorAll(".head"));

//console.dir - посмотреть методы и свойства объекта  console.dir(mainHead);
//getAttribute("title") - получает содержимое атрибута в скобках
//setAttribute("title", "Новый title") - Вносит изменение в значение атрибута; setAttribute (принимает 2 параметра)
// const mainHead = document.querySelector(".head");
// mainHead.setAttribute("title", "Новый title");
// mainHead.setAttribute("style", "color:blue");
// console.log(mainHead);
// Так тоже можно смотреть и изменять значения некоторых атрибутов, т.к. некоторые из них  объекты
// mainHead.title = "Новый title!";
// console.log(mainHead.title);

// console.log(mainHead.getAttribute("title"));

//Чтобы получить класс необходимо написать className, но при добавлении новых - затирает старые классы
// mainHead.className = "head_red";
// console.log(mainHead.className);

// .classList.add("head_red") добавляет класс, но не затирает те, что были изначально
//.classList.remove("head_black") - удаляет класс не трогая другие
//.classList.contains('head_black') - делает проверку, есть ли такой класс - возвращает булевое значение
//.classList.toggle("head_black") - добавляет если нет, убирает если есть
// const mainHead = document.querySelector(".head");
// console.log(mainHead.classList);
// mainHead.classList.add("head_red");
// console.log(mainHead.classList);
// mainHead.classList.remove("head_black");
// console.log(mainHead.classList);
// console.log(mainHead.classList.contains("head_black"));
// mainHead.classList.toggle("head_black");
// console.log(mainHead.classList);

// const mainHead = document.querySelector(".head");
// mainHead.style.color = "#fff";
// mainHead.style.fontSize = "50px";
// document.body.style.backgroundColor = "#033";
// console.log(mainHead.style);

//getComputedStyle(mainHead)- получаем свойства css, getComputedStyle(mainHead, 'after') получаем свойства css - псевдоэлемента; Информация о стилях берется из браузера - после того, как стили были применены к элементу
// const mainHead = document.querySelector(".head");
// const computedStyleMainHead = getComputedStyle(mainHead);
// const computedStyleMainHead = getComputedStyle(mainHead, "after");
// console.log(computedStyleMainHead);
// console.log(computedStyleMainHead.width);
// console.log(computedStyleMainHead.marginTop);
// console.log(computedStyleMainHead.fontFamily);
// console.log(computedStyleMainHead.font);

//hgroup.querySelectorAll(".head") можно искать все элементы внутри какого-то элемента
// const hgroup = document.querySelector("hgroup");
// const head = hgroup.querySelectorAll(".head");
// console.log(head);

//Вложенность селекторов ("hgroup>.head"), если просто внутри ("hgroup .head")
// const head = document.querySelectorAll("hgroup>.head");
// console.log(head);
