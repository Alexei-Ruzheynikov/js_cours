"use strict";

// const phone = document.getElementById("phone");

// const showLog = function () {
//   this.value = this.value.replace(/\D/g, "");
// };

// срабатывает при нажатии кнопки
// phone.addEventListener("keydown", showLog);
// срабатывает при отпускании кнопки
// phone.addEventListener("keyup", showLog);
// //срабатывает, только когда како-либо символ вводится
// phone.addEventListener("keypress", showLog);
// //срабатывает, при изменении value
// phone.addEventListener("input", showLog);

// maskPhone("#phone", "8(___)___-____");

//
//
//
//

//Про валидацию
// const myForm = document.getElementById("myform");

// myForm.addEventListener("submit", valid);

// const elementsForm = [];

// for (const elem of myForm.elements) {
//   if (elem.tagName.toLowerCase() !== "button" && elem.type !== "button") {
//     elementsForm.push(elem);
//   }
// }
// console.log(elementsForm);

// function valid(event) {
//   const patternPhone = /^\d+$/;
//   elementsForm.forEach((elem) => {
//     if (!elem.value) {
//       elem.style.border = "1px solid red";
//       event.preventDefault();
//     } else {
//       elem.style.border = "";
//     }

//     if (elem.id === "phone" && !patternPhone.test(elem.value)) {
//       elem.style.border = "1px solid red";
//       event.preventDefault();
//     }
//   });
// }

// Практика
//
//
const valid = new Validator({
  selector: "#myform",
  pattern: {
    phone: /^\+380\d{7}$/,
    zip: /\d{5,6}/
  },
  method: {
    phone: [["notEmpty"], ["pattern", "phone"]],
    email: [["notEmpty"], ["pattern", "email"]]
  }
});

valid.init();
