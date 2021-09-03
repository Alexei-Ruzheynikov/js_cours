"use strict";

// Объекты и массивы

// let car = {
//   model: "mazda",
//   year: 2006,
//   turbocharging: true,
//   specifications: [],
//   style: {
//     color: "blue",
//   },
// };
//3
//Обращение к свойствам объекта, 2 способа
// console.log(car.model);
// console.log(car["model"]);

//Добавление свойства таким синтаксисом, в таком случае можно писать полноценные строки с пробелами
// car["best place"] = "city";
// console.log(car);

//Еще один способ передавать строки с пробелами в свойства и значения - через переменную
// let titleTrans = "Коробка передач";
// let bodyTrans = "Автоматическая коробка передач";
// car[titleTrans] = bodyTrans;
// console.log(car);

//2
// Такая функция внутри объекта называется методом объекта
// car.ride = function (speed) {
//   console.log("Машина едет со скоростью " + speed + " км/ч");
// };

// car.ride(60);

// car.stop = stop;
// car.stop();
// console.log(car);

// function stop() {
//   console.log("Машина стоит, скорость 0 км/ч");
// }

//1
// let obj = new Object();

// car.turbocharging = true;

// console.log(car.model);

// obj.color = "black";
// console.log(obj);

// car.style = obj;
// console.log(car);

// console.log(car.style === obj);

// console.log(obj);
// car.style.color = "red";
// console.log(obj);

// Массив - это объект, в котором ключи заполняются автоматически
// let arr = [1, 2, 3, 4];
// console.log(arr);
//Обращаемся к элементу
// console.log(arr[0]);
//Изменение элемента по индексу
// arr[0] = "cat";
// console.log(arr);
// console.log(arr.length);
//Интересный способ добавления элемента в конец массива( не рекомендуется)
// arr[arr.length] = "dog";
// console.log(arr);

// arr[10] = "human";
// console.log(arr);

//аргументы станут элементами массива, но если передадим 1 аргументы - длинной массива
// let array = new Array(1, 2, 3, 4);
// console.log(array);

// let arr = [1, 2, 3, 4];
// arr.length = 30;
// console.log("arr.length: ", arr.length);

// console.log("arr: ", arr);

// let array = ["Apple", "Orange", "Banana"];
//push - добавляет элемент в конец массива
// array.push("kiwi");
// lemon - добавляет элемент вначало массива
// array.unshift("lemon");
// console.log(array);

//pop - удаляет и возвращает последний элемент
// console.log(array.pop());
// console.log(array);

//shift - удаляет и возвращает первый элемент
// console.log(array.shift());
// console.log(array);

//sort - сортирует массив по алфавиту(учитывает регистр)
// console.log(array.sort());

//slice - возвращает массив начинае с индекса, в примере -2, если указать 2 параметра например 1,3, то вернет 1 и 2, не включая 3; так же принимает отрицательные значения - сколько элементов с конца нам необходимо вернуть
// console.log(array.slice(2));

//Метод splice - 1 - откуда, 2 - сколько эл удалить, 3 - какие элементы добавить на место удаления; Возвращает удаленный элемент
// console.log(array.splice(1, 1, "avocado", "papaya"));
// console.log(array);

// join - возвращает строку, принимает аргумент - разделитель элементов
// console.log(array.join(" - "));

// reverse - переворачивает массив
// console.log(array.reverse());

//concat - складывает исходный массив с другим массивом(или элементами) и возвращает новый не изменяя текущий
// console.log(array.concat(["avocado", "papay", "kiwi"]));

//Цикл for in
// let car = {
//   model: "mazda",
//   year: 2006,
//   turbocharging: true,
//   specification: [],
//   style: {
//     color: "blue",
//   },
// };

// for (let key in car) {
//   console.log("Ключ: " + key + " Знначение " + car[key]);
// }

//Сколько свойств у объекта
// console.log(Object.keys(car).length);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (item, i, array) {
//   console.log(item, i, array);
// });

//for of - для массивов, for in - для объектов
// for (let item of arr) {
//   console.log(item);
// }

//delete -удалили элемент массива
// delete arr[3];
// console.log("arr: ", arr);

// let obj = {
//   a: 3,
//   b: true,
//   c: "js",
// };

//delete -удалили элемент объекта
// delete obj.b;
// console.log("obj: ", obj);

//Псевдомассив arguments. Псевдомассивы не имеют методов как у массивов
// function test() {
//   console.log(arguments);
// }
// test(1, 2, 3, 4);

//По проекту
// Функцию start - перемещаем  в самое начало
// переменную money - самую первую перенести вверх поставить

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за расчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
};
//Убираем переменные income, mission, period
//Переменные addExpenses и deposit перемещаем в asking функцию
//убираем console.log(addExpenses.toLowerCase().split(", "));

showTypeOf(appData.income);
showTypeOf(appData.deposit);
let expenses1, expenses2; // вернуть

getTargetMonth; // - ?
