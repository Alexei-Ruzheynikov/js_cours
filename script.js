"use strict";

const collections = document.querySelectorAll(".collection"),
  elems = document.querySelectorAll(".elem"),
  secondHead = document.getElementById("second-head");

console.log(collections);
console.log(elems);

//remove() - удаляет элемент в DOM дереве, но оставляет в переменной
// elems[3].remove();
// elems[1].remove();

//append - берет и перемещает элементы где бы они не были, вставляет элемент в конец родителя
// collections[1].append(elems[3]);
// collections[1].append(elems[1]);

//prepend - аналог append, только вставляет вначало родителя
// collections[1].prepend(elems[5]);

// before правую коллекцию вставляет перед левой коллекцией
// collection[0].before(collections[1]);

// after - вставляет элемент справа(elems[0]) после элемента слева(elems[4])
// elems[4].after(elems[0]);

// replaceWith убирает левый элемент и вставляет на его место правый элемент
// elems[2].replaceWith(elems[3]);

//cloneNode - делает копию элемента - только его тэга, с атрибутом true в скобках - копирует все ноды
// const elemClone = elems[3].cloneNode(true);
//Добавляем новый класс нашему клону
// elemClone.classList.add("newElem");
// Добавляем новое значения контенту нашего элемента
// elemClone.textContent = "new elem";
// collections[1].append(elemClone);

//задаем  и получаем контент элемента
// elems[4].textContent = "Привет";
//innerHTML - позволяет использовать тэги
// elems[2].innerHTML = "<b>Привет</b>";
// console.log(elems[4].textContent);

//createElement - создаем элемент тэг
// const newElem = document.createElement("li");
// newElem.textContent = "Новый элемент";
// newElem.classList.add("new_elem");

// collections[1].append(newElem);
// console.log(newElem);

//
//insertAdjacentText - добавляет текст без затирания в элемент!
//insertAdjacentText - 1 параметр - место куда хотим вставить(4 варианта), 2 параметр - добавляемый текст; beforebegin - вставляет до элемента, afterend - после элемента, afterbegin - перед текстом элемента, beforeend - после текста элемента
// secondHead.insertAdjacentText("beforebegin", "beforebegin");
// secondHead.insertAdjacentText("afterend", "afterend");
// secondHead.insertAdjacentText("afterbegin", "afterbegin");
// secondHead.insertAdjacentText("beforeend", "beforeend");

// insertAdjacentElement вставляет как прошлый метод, только элементы, а не текст
// secondHead.insertAdjacentElement("beforebegin", elems[1]);
// secondHead.insertAdjacentElement("afterend", elems[2]);
// secondHead.insertAdjacentElement("afterbegin", elems[3]);
// secondHead.insertAdjacentElement("beforeend", elems[4]);

// И этот способ добавляет тэги с текстом
// secondHead.insertAdjacentHTML("beforebegin", "<h3>beforebegin</h3>");
// secondHead.insertAdjacentHTML("afterend", "<h3>afterend</h3>");
// secondHead.insertAdjacentHTML("afterbegin", "<h3>afterbegin</h3>");
// secondHead.insertAdjacentHTML("beforeend", "<h3>beforeend</h3>");

//
//

//Устаревшие методы, которыми лучше не пользоваться, но знать как работают надо
const newElem = document.createElement("li");
newElem.textContent = "Новый элемент";
newElem.classList.add("new_elem");

// collections[1].appendChild(elems[3]); //append

// collections[0].insertBefore(newElem, elem[4]); // before

// collections[0].insertBefore(elems[5], collections[0].firstChild); // prepend

// collections[0].replaceChild(newElem, elems[4]); //replaceWith

// collections[0].removeChild(elems[2]); //remove
