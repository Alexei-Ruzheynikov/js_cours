// "use strict";

// console.log(this);
// this всегда ссылается на объект

// function one() {
//   console.log("one");
//   two();
// }

// function two() {
//   console.log("two");
//   three();
// }

// function three() {
//   console.log("three");
// }
// место вызова функции call site
// one();

//
//
//
// let a = 10;

// function test() {
//   console.log("Hello", this.a);
// }

// test();

// Всегда когда функцию вызывают без точки, без привязки к объекту, то this - это window

//
//
// let obj = {
//   x: 10,
//   y: 15,
//   test: newTest,
// };
// let obj2 = {
//   x: 20,
//   y: 25,
//   testObj: obj,
// };
// function newTest() {
//   console.log("this: ", this.x);
// }
// obj.test();
// obj2.testObj.test();

//
//
//

//1. Привязка по умолчанию foo()
//2. Не явная привязка obj.foo()
//3. Явная привязка apply,call, bind
//4. Привязка new

let obj = {
  x: 10,
  y: 15,
};
function newTest() {
  console.log("this: ", this);
}
function hardBind(hard) {
  newTest.call(hard);
}

hardBind(obj);

let foo = newTest.bind(obj);

//apply - принимает массив аргументов,которые будут разобраны и переданы в функцию
// newTest.apply(obj);
// call -принимает сколько угодно параметров через запятую
// newTest.call(obj);
