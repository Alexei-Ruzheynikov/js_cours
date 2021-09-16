"use strict";

// const wrap = function (fn) {
//   console.log("Оборачиваем функцию: ", fn.name);
//   return function () {
//     const arg = Array.from(arguments);
//     console.log("Вызов обертки для ", fn.name);
//     console.log("Аргументы:");
//     console.dir({
//       arg,
//     });
//     const result = fn.apply(null, arg);
//     console.log("Результат функции: ", fn.name);
//     console.dir({
//       result,
//     });
//     return result;
//   };
// };
// const foo = function (a, b) {
//   return a + b;
// };
// const fooWrap = wrap(foo);
// console.log("fooWrap(2,3): ", fooWrap(2, 3));

//
//
//

// const wrap = (fn) => {
//   console.log("Оборачиваем функцию: ", fn.name);
//   return (...args) => {
//     console.log("Вызов обертки для ", fn.name);
//     console.log("Аргументы:");
//     console.dir({ args });
//     const result = fn(...args);
//     console.log("Результат функции: ", fn.name);
//     console.dir({ result });
//     return result;
//   };
// };
// const foo = function (a, b) {
//   return a + b;
// };
// const fooWrap = wrap(foo);
// console.log("fooWrap(2,3): ", fooWrap(2, 3));

//
//

// const bf = (...args) => {
//   console.log("before: ", args);
//   return args;
// };

// const aft = (res) => {
//   console.log("after: ", res);
//   return res;
// };

// const wrap =
//   (before, fn, after) =>
//   (...args) =>
//     after(fn(...before(...args)));

// const foo = (a, b, c) => {
//   console.log("функция выполняется ", a, b, c);
//   return a + b + c;
// };

// const fooWrap = wrap(bf, foo, aft);

// fooWrap(1, 3, 6);

//
//
//
//

//
const once =
  (fn) =>
  (...args) => {
    if (!fn) return;
    const res = fn(...args);
    fn = null;
    return res;
  };

const maxCall = (count, fn) => {
  let counter = 0;
  return (...args) => {
    if (counter === count) return;
    counter++;
    return fn(...args);
  };
};

const blockFunc = (fn) => {
  const wrapper = (...args) => {
    if (fn) return fn(...args);
  };
  wrapper.blocked = () => (fn = null);
  return wrapper;
};

const timeOut = (msec, fn) => {
  let timer = setTimeout(() => {
    if (timer) console.log(`Сброшен таймер функции: ${fn.name}`);
    timer = null;
  }, msec);
  return (...args) => {
    if (timer) {
      // clearTimeout(timer);
      // timer = null;
      return fn(...args);
    }
  };
};

const wrap = (fn) => {
  let limit = 0;
  let counter = 0;
  let startFn = fn;

  const wrapper = (...args) => {
    if (limit && counter === limit) wrapper.blocked();
    if (fn) {
      const res = fn(...args);
      counter++;
      return res;
    }
  };
  wrapper.blocked = () => {
    fn = null;
    return wrapper;
  };

  wrapper.timeout = (msec) => {
    setTimeout(() => wrapper.blocked(), msec);
    return wrapper;
  };
  wrapper.limit = (count) => {
    limit = count;
    return wrapper;
  };
  wrapper.start = () => {
    fn = startFn;
    return wrapper;
  };
  return wrapper;
};
const foo = (a, b, c) => a * b + c;

// const fooOnce = once(foo);
// const onceCallTwo = maxCall(2, foo);
// const onceCallFour = maxCall(4, foo);
// const blockFoo = blockFunc(foo);
// const timeOutFoo = timeOut(3000, foo);

// setInterval(() => {
//   console.log(timeOutFoo(2, 3, 4));
// }, 550);

const fooWrap = wrap(foo);

console.log(fooWrap(2, 3, 4));
console.log(fooWrap(3, 4, 4));
console.log(fooWrap(4, 5, 5));
console.log(fooWrap(5, 5, 5));
console.log(fooWrap(3, 10, 10));

// console.log(blockFoo(2, 3, 4));
// console.log(blockFoo(4, 4, 4));
// console.log(blockFoo(6, 5, 5));
// blockFoo.blocked();
// console.log(blockFoo(3, 3, 1));
// console.log(blockFoo(5, 5, 5));
