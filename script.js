"use strict";

// function test() {
//   const arg = Array.prototype.slice.call(arguments);
//   console.log(arg);
// }
// test("red", 5, 12, "black", [], true, 9);

//...arr рест параметр - троеточие - передаем массив, рест параметр должен идти последним
// function test(a, b, c, ...arr) {
//   console.log(a, b, c);
//   console.log(arr);
// }
// test("red", 5, 12, "black", [], true, 9);

// const arr = ["red", 5, 12];
// const arr2 = ["black", true];
// function test(a, b, c, d, e, f) {
//   console.log(a, b, c);
//   console.log(d, e, f);
// }
// записывает массив в 1 значение
// test(arr);
//спред параметр записывает в каждую переменную элемент
// test(...arr, 50, ...arr2);
//
//
//с помощью спред оператора из нескольких массивов можем собрать один
// const arr = ["red", 5, 12];
// const arr2 = ["black", true];
// const arr3 = [...arr, ...arr2];
// console.log("arr3: ", arr3);

//
//
// const allp = document.querySelectorAll("p");
// console.log(allp);
// const newp = [...allp];
// console.log(newp);

//
//
// const car = {
//   brand: "mazda",
//   model: 3,
//   options: {
//     color: "green",
//     abs: true,
//   },
// };
//старый вариант
// const brand = car.brand;
// const model = car.model;
// const color = car.color;

//деструктуризация объекта
// const {
//   brand,
//   model,
//   options: { color: carColor, abs: carABS },
// } = car;
// console.log(brand, model, carColor, carABS);

// const createCar = ({
//   brand = "bmw",
//   model = 6,
//   color = "black",
//   colorInt = "white",
// }) => {
//   console.log(`
//   Запущено производство автомобиля ${brand} ${model}
//   цвет кузова: ${color}
//   цвет салона: ${colorInt}`);
// };

// createCar({
// brand: "mazda",
// model: 3,
// color: "blue",
// colorInt: "black",
// });

//деструктуризация массива
// const cars = ["mazda", "bmw", "audi", "mercedes-benz", "ЗИЛ"];
// const [a, b, c] = cars;
// console.log(a);
// console.log(b);
// console.log(c);

//деструктуризация многомерного массива
// const cars = [["mazda", "bmw"], ["audi", "mercedes-benz"], "ЗИЛ"];
// const [a, b, c] = cars;
// console.log(a);
// console.log(b);
// console.log(c);

//деструктуризация многомерного массива - всех элементов по отдельности
// const cars = [["mazda", "bmw"], ["audi", "mercedes-benz"], "ЗИЛ"];
// const [[a, b], [c, d], e] = cars;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//
//
// const carsModel = {
//   brand: "Volvo",
//   models: {
//     sedan: ["s60", "s90"],
//     cross: ["v60", "v90"],
//   },
// };
// const {
//   models: {
//     sedan: [s1, s2],
//     cross: [c1, c2],
//   },
// } = carsModel;
// console.log(s1, s2, c1, c2);

// const car = "bentley";
// const cycle = "bmx";
// const bike = "honda";

// const transport = {
//   car,
//   cycle,
//   bike,
//   ride() {
//     console.log("go ride");
//   },
// };

// console.log(transport);

//
//

// const transport = {
//   bike: "honda",
//   car: "bentley",
//   cycle: "bmx",
// };

// const newTransport = {
//   bike: "suziki",
//   quadBike: "polaris",
// };

// const newTransport2 = {
//   bike: "Ducati",
// };
// //Так создаем новый объект {} - объект в куда будут записывать последующие свойства из объектов
// const currentTransport = Object.assign(
//   {},
//   transport,
//   newTransport,
//   newTransport2
// );

// console.log(currentTransport);

//
//
// Коллекция map и set

// const obj = {
//   a: 5,
//   b: 10,
// };
// console.log(obj);
//
//
//
// const map = new Map([
//   [2019, "auto"],
//   ["joker", 1],
// ]);
// map.set("car", { brand: "mazda", model: 3 });
// map.set(777, "три топора");
// map.set(null, "даже так");
// map.set(NaN, "Ух ты");
// map.set(undefined, "неожиданно");
// const obj = {
//   name: "Макс",
//   age: 30,
// };
// map.set(obj, 123);
// const func = () => {
//   console.log("Hello");
// };
// map.set(func, "yxx");
// map.set(false, true);

// console.log(map.get(func));
// console.log(map.size);
// console.log(map);
//
//
// const collectMap = new Map([
//   ["hello", "world"],
//   ["year", 1812],
// ]);
// collectMap.delete("year");
// //clear - удаляет все элементы
// collectMap.clear();
// const arr = Array.from(map);
// map.forEach((value, key) => {
//   console.log(`ключ: ${key} значение: ${value}`);
// });
// for ([key, value] of map) {
//   console.log(`ключ: ${key} значение: ${value}`);
// }
// // console.log(arr);
//
//
//
//Коллекция содержит только уникальные значение(3 элемента, а не 5)
// const cars = new Set();
// cars.add("Mazda");
// cars.add("Volvo");
// cars.add("BMW");
// cars.add("Volvo");
// cars.add("BMW");
// console.log(cars);
// console.log(cars.size);
// содержится ли элемент has
// console.log(cars.has(null));
//удаление элемента
// cars.delete("BMW");

//
//
//
// const cars = new Set(["Mazda", "Volvo", "BMW"]);
// const [car1, car2] = cars;
// console.log("cars1: ", car1);
// console.log("cars2: ", car2);
//
//
//
//
const cars = new Set(["Mazda", "Volvo", "BMW"]);
const newCars = new Set(["Toyota", "Bentley", "Volvo"]);
const allCars = new Set([...cars, ...newCars]);
console.log(allCars);
