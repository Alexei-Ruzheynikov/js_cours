"use strict";

const list = document.querySelector(".list");
// const items = document.getElementsByClassName("list-item");
const items = document.querySelectorAll(".list-item");

items.forEach(function (elem) {
  elem.addEventListener("click", function () {
    this.style.color = "red";
  });
});

const students = {
  people: [
    {
      name: "Петр",
      surname: "Петров",
      age: 42,
    },
    {
      name: "Александр",
      surname: "Александров",
      age: 22,
    },
    {
      name: "Иван",
      surname: "Иванов",
      age: 32,
    },
  ],
  study() {
    this.people.forEach(function (item) {
      console.log(item.surname);
    });
    console.log("Прошел 1:20");
    console.log(this);
    const _this = this;
    this.people.forEach(function (item) {
      _this.eat(item);
    });
  },
  eat(human) {
    console.log(human.name + " пошел в столовую");
  },
};
students.study();

//
//
//

// const form = document.forms.form;
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const newLi = document.createElement("li");
//   newLi.textContent = form.text.value;
//   newLi.classList.add("list-item");
//   list.append(newLi);
//   form.reset();
//   // console.log(items);
// });

// });
// console.log([...items]);

//
//
//

// const arr = [1, 2, 3];
// const arr2 = arr;
// const arr3 = [...arr];

// arr.push(4);
// arr3.push(10);
// arr2.push(5);
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
