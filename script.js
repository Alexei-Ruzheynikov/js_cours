"use strict";

// es5 - старый стандарт
// ecmaScript2015 = es6.(новый стандарт, оптимизированный es5)

// console.log(n);
// var n = 5;
// console.log(n);

// console.log(n);
// let n = 5;

//
//
//

// const name = "Alex",
//   age = 30;

// const str =
//   "<h1>Hello</h1> \n" +
//   "<div>" +
//   name +
//   "</div> \n" +
//   "<div>" +
//   (age + 1) +
//   "</div>";
// console.log(str);
// //Современный стандарт - обратные кавычки
// const newStr = `<h1>Hello</h1>
// <div>${name}</div>
// <div>${age + 1}</div>`;
// console.log(newStr);

//
//
//

// В es6 можно задать параметры по умолчанию в функцию, чаще всего параметры со значением по умолчанию прописывают в конце
// const createHome = function (wall = 2, doors = 3, window = 6) {
//   console.log(`Дом имеет:
//   стен: ${wall},
//   двери: ${doors},
//   окна: ${window}
//   `);
// };
// createHome();

// стрелочная функция в es6
// const sum = (a, b) => {
//   return a + b;
// };
// console.log("sum(2, 3) ", sum(2, 3));

//стрелочная функция с объектом

// const sum = (a, b) => ({
//   a: a,
//   b: b,
//   sum: a + b,
// });
// console.log(sum(2, 4));

//
//

// const p = document.querySelectorAll("p");
// p.forEach((e) => {
//   console.log(e);
// });

// const p = document.querySelector("p");
// p.addEventListener("click", () => {
//   console.log("hi");
// });

//ЕЩЕ РАЗ ПОСМОТРЕТЬ ЧТО ТАКОЕ КОНТЕКСТ ВЫЗОВА

// const Human = function (firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// };
// const newHuman = new Human("John", "Wick", 46);
// console.log(newHuman);

// Стрелочные функции рекомендуется использовать везде где не нужен контекст вызова

//
//
//
//defineProperty, геттеры, сеттеры

// const mazda = {
//   model: 3,
//   year: 2006,
//   brand: "x7",
//   get fullTitle() {
//     return this.brand + " " + this.model;
//   },
//   set fullTitle(value) {
//     this.brand = value;
//   },
// };
// mazda.fullTitle = "BMW";
// console.log(mazda.fullTitle);
// mazda.color = "blue";
//
//

//writeable false - запрещает дальнейшее переопределение
// configurable false = запрещает удаление свойства
//enumerable false - запрещает перебор в массиве
// есть геттер(передает значение) и сеттер(задает значение)
// Object.defineProperty(mazda, "color", {
//   value: "blue",
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });
// for (let key in mazda) {
//   console.log(key, mazda[kay]);
// }
// console.log(mazda);

//
//
//

// Классы в es6
class CarWash {
  constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services;
  }

  static noCarBaseModel() {
    return "none";
  }

  washReady() {
    this.washed = true;
    CarWash.counter++;
    this.report();
  }
  report() {
    console.log(this.brand, this.model, this.washed);
  }
  get services() {
    console.log(this._services);
    return this._services.length > 0 ? "Есть доп услуги" : "Нет доп услуг";
  }
  set services(addServices) {
    return this._services.push(addServices);
  }
}
// super - добавляет то что нам нужно от прототипного класса
class PassCar extends CarWash {
  constructor(brand, model, services, pass = 5) {
    super(brand, model, services);
    this.pass = pass;
  }
  washReady() {
    super.washReady();
    this.reportOffice();
  }
  reportOffice() {
    console.log("На мойке для легковых была помыта мышина");
  }
}

CarWash.counter = 0;

const car1 = new CarWash("mazda", 3, ["black tires", "wacks"]);
const car2 = new PassCar("BMW", "x5");
const car3 = new CarWash("Volvo", "s60");
const car4 = new CarWash("ZAZ");

// car1.washReady();
// car2.washReady();
// car3.washReady();
// car4.washReady();

car1.services = "Протирка стекол";

console.log(car1.services);
console.log(car2.services);

console.log(CarWash.counter);

console.log(car1);
console.log(car2);
