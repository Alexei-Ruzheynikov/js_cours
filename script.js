"use strict";

// Мемоизация - работает как выбор фильтра в интернет магазине

// console.log("Memoize");

// // const strKey = (item) => item.toString() + "(" + typeof item + ")";

// const strKey = (item) => JSON.stringify(item) + "(" + typeof item + ")";

// const generateKey = (args) => args.map(strKey).join(",");

// const memoize = (fn, length) => {
//   const cache = new Map();
//   return (...args) => {
//     const key = generateKey(args);
//     if (cache.has(key)) return cache.get(key);
//     const res = fn(...args);
//     if (cache.size >= length) {
//       const firstKey = cache.keys().next().value;
//       console.log("удаляем", firstKey);
//       cache.delete(firstKey);
//     }
//     cache.set(key, res);
//     return res;
//   };
// };

// // const memoize = (fn) => {
// //   const cache = {};
// //   return (...args) => {
// //     const key = generateKey(args);
// //     const val = cache[key];
// //     if (val) return val;
// //     const res = fn(...args);
// //     cache[key] = res;
// //     return res;
// //   };
// // };

// // const foo = (a, b) => {
// //   let res = 0;
// //   for (let i = a; i < b; i++) {
// //     res += 1;
// //   }
// //   return res;
// // };

// // const fooMem = memoize(foo);

// // console.log(fooMem(1, 1000000000));
// // console.log(fooMem(1, 1000000001));
// // console.log(fooMem(1, 1000000002));
// // console.log(fooMem(1, 1000000003));
// // console.log(fooMem(1, 1000000000));
// // console.log(fooMem(1, 1000000001));
// // console.log(fooMem(1, 1000000002));
// // console.log(fooMem(1, 1000000003));

// // const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));

// const fib = (n) => n;

// // const fibMem = memoize(fib);
// const fibMem = memoize(fib, 4);

// // console.log(fibMem(40));
// // console.log(fibMem(41));
// // console.log(fibMem(40));
// // console.log(fibMem(42));
// // console.log(fibMem(44));
// // console.log(fibMem(43));

// console.log(fibMem({ a: 1 }));
// console.log(fibMem({ a: 2 }));
// console.log(fibMem({ a: 3 }));
// console.log(fibMem({ a: 4 }));
// console.log(fibMem({ a: 5 }));
// console.log(fibMem({ a: 6 }));

// Чейнинг - вызов функции друг за другом  принцип 10000 - 1000 - 10000 - 20
// const foo = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };

// const foo = (a) => (b) => (c) => a + b + c;

// // const foo1 = foo(2);
// // console.log("foo1: ", foo1);

// // const foo2 = foo1(2);
// // console.log("foo2: ", foo2);

// // const foo3 = foo2(3);
// // console.log("foo3: ", foo3);

// foo(1)(2)(3);
// console.log(foo(1)(2)(3));

//
//
//

{
  const Race = function (count) {
    this.count = count;
    this.racer = [];
  };
  Race.prototype.addRacer = function (name) {
    if (this.count <= 0) {
      console.log("Заявки в команду больше не принимаем");
      return this;
    }
    this.racer.push(name);
    this.count--;
    console.log(this.racer);
    return this;
  };
  const maximum = new Race(2);
  // maximum.addRacer("Вася").addRacer("Петя");
}

//
//
//

{
  class Race {
    constructor(count) {
      this.count = count;
      this.racer = [];
    }
    addRacer(name) {
      if (this.count <= 0) {
        console.log("Заявки в команду больше не принимаем");
        return this;
      }
      this.racer.push(name);
      this.count--;
      console.log(this.racer);
      return this;
    }
  }

  const maximum = new Race(3);
  //    maximum
  //     .addRacer("Вася")
  //     .addRacer("Петя")
  //     .addRacer("Микола")
  //     .addRacer("Екатерина");
}

//
//
//
//

// {
// function Foo(x) {
//   this.x = x;
// }
// Foo.prototype.map = function (fn) {
//   return new Foo(fn(this.x));
// };

// new Foo(5).map((a) => console.log(a + a));
// new Foo("Привет").map(console.log);

// function foo(x) {
//   return function (fn) {
//     return foo(fn(x));
//   };
// }

// foo(5)((a) => console.log(a + a));
// foo("Привет")(console.log);
// }

{
  const race = (count = 0, racer = []) => ({
    addRacer: (name) => {
      if (count <= 0) {
        console.log("Заявки в команду больше не принимаем");
        return race(count, racer);
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race(count, racer);
    }
  });

  const maximum = race(4);
  maximum
    .addRacer("Вася")
    .addRacer("Петя")
    .addRacer("Микола")
    .addRacer("Екатерина")
    .addRacer("Максим");
}

{
  const race = (
    count = 0,
    racer = [],
    obj = {
      addRacer: (name) => {
        if (count <= 0) {
          console.log("Заявки в команду больше не принимаем");
          return race(count, racer, obj);
        }
        racer.push(name);
        count--;
        console.log(racer);
        return race(count, racer, obj);
      },
      removeRacer: (name) => {
        const exist = racer.indexOf(name);
        if (exist === -1) {
          console.log("Такого участника нет в списке");
          return race(count, racer, obj);
        }
        racer.splice(exist, 1);
        count++;
        console.log(racer);
        return race(count, racer, obj);
      }
    }
  ) => obj;

  const maximum = race(3);
  maximum
    .addRacer("Вася")
    .addRacer("Петя")
    .removeRacer("Виталий")
    .addRacer("Микола")
    .addRacer("Екатерина")
    .addRacer("Максим")
    .removeRacer("Микола")
    .addRacer("Илья");
}

//Последний пример - объединение ООП и функционального программирования
// Это база по чейнингу. Изучить это, далее, чейнинги аснхронные, чяейннинги на промисах, на функтерах, прототипах, фабриках.
