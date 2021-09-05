"use strict";

const collection = document.querySelector(".books");
const books = document.querySelectorAll(".book");
collection.prepend(books[2]);
collection.prepend(books[5]);
collection.prepend(books[3]);
collection.prepend(books[4]);
collection.prepend(books[0]);
collection.prepend(books[1]);

const bodyBg = document.querySelector("body");
bodyBg.setAttribute(
  "style",
  "background-image:url(./image/you-dont-know-js.jpg)"
);

const link = books[4].querySelector("h2 a");
link.textContent = "Книга 3. this и Прототипы Объектов";

const adv = document.querySelector(".adv");
adv.remove();

const paragraphWrapOne = books[0].querySelector("ul");
const paragraphOne = books[0].querySelectorAll("li");
paragraphWrapOne.append(paragraphOne[0]);
paragraphWrapOne.append(paragraphOne[1]);
paragraphWrapOne.append(paragraphOne[3]);
paragraphWrapOne.append(paragraphOne[6]);
paragraphWrapOne.append(paragraphOne[8]);
paragraphWrapOne.append(paragraphOne[4]);
paragraphWrapOne.append(paragraphOne[5]);
paragraphWrapOne.append(paragraphOne[7]);
paragraphWrapOne.append(paragraphOne[9]);
paragraphWrapOne.append(paragraphOne[2]);
paragraphWrapOne.append(paragraphOne[10]);

const paragraphWrapFive = books[5].querySelector("ul");
const paragraphFive = books[5].querySelectorAll("li");
paragraphWrapFive.append(paragraphFive[0]);
paragraphWrapFive.append(paragraphFive[1]);
paragraphWrapFive.append(paragraphFive[9]);
paragraphWrapFive.append(paragraphFive[3]);
paragraphWrapFive.append(paragraphFive[4]);
paragraphWrapFive.append(paragraphFive[2]);
paragraphWrapFive.append(paragraphFive[6]);
paragraphWrapFive.append(paragraphFive[7]);
paragraphWrapFive.append(paragraphFive[5]);
paragraphWrapFive.append(paragraphFive[8]);
paragraphWrapFive.append(paragraphFive[10]);

const paragraphWrapSix = books[2].querySelector("ul");
const paragraphSix = books[2].querySelectorAll("li");
paragraphSix[8].insertAdjacentHTML(
  "afterend",
  "<li>Глава 8: За пределами ES6</li>"
);
