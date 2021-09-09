// "use strict";

// let arr = [1, , 2, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(Array.prototype);

// let car = {
//   doors: 4,
//   turbocharging: false,
//   ride: function () {
//     console.log("Машина едет");
//   },
// };
// let newCar = Object.create(car);
// console.log("newCar: ", newCar);
// newCar.model = "mazde 3";
// console.log(newCar.doors);

//hasOwnProperty - проверяет есть ли свойства у наследника в данный момент
// console.log(newCar.hasOwnProperty("model"));
// console.log(newCar.hasOwnProperty("doors"));

//.__proto__.hasOwnProperty - ПРОВЕРЯЕТ СВОЙСТВА У ПРОТОТИПА (наследуемые свойства)
// console.log(newCar.__proto__.hasOwnProperty("model"));
// console.log(newCar.__proto__.hasOwnProperty("doors"));

//isPrototypeOf - проверяет, является ли, то что в начале - прототипом для того что в скобках
// console.log(car.isPrototypeOf(newCar));

//
//
//
// Если объект создан через оператор new, то this будет указывать на этот объект
// function Car(model, color) {
//   // this.model = "Mazda";
//   this.model = model;
//   this.color = color;
// }

// Car.prototype.ride = function () {
//   console.log("Ехать");
// };

// let car1 = new Car("Mazda", "Red");
// let car2 = new Car("VAZ", "black");

// console.log(car1.ride === car2.ride);

// car1.ride();

// console.log(car1);
// console.dir(Car);

// let carTest = {
//   model: "Mazda",
// };
// console.log(carTest);
//
//
//

// function Car(brand, model, options) {
//   this.brand = brand;
//   this.model = model;
//   options = options || {};
//   this.color = options.color;
//   this.transmission = options.transmission;
// }
// Car.prototype.ride = function () {
//   console.log(this.brand + " " + this.model + " поехала");
// };

// let car1 = new Car("mazda", "3", { color: "blue" });
// let car2 = new Car("Bmw", "x3", { ABS: true });
// console.log(car1);
// console.log(car2);

// //Проверяем, является ли прототип Car прототипом объекта car1
// console.log(Car.prototype.isPrototypeOf(car1));
// // равносильно
// console.log(сar2 instanceof Car);

// car1.ride();
// car2.ride();

//
//
//
//

function Car(countryBuild, options) {
  this.countryBuild = countryBuild;
  options = options || {};
  this.color = options.color;
  this.transmission = options.transmission;
}

Car.prototype.ride = function () {
  console.log(this.brand + " " + this.model + " поехала!");
};

function Audi(countryBuild, options, model, type) {
  this.brand = "Audi";
  Car.apply(this, arguments);
  this.model = model;
  this.type = type;
}

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

let car_q7 = new Audi("germany", { color: "red" }, "Q7", "S");

// console.log(car_q7);
// console.log(car_q7 instanceof Audi);
// console.log(car_q7 instanceof Car);
car_q7.ride();
