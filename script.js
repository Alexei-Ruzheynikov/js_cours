"use strict";

// Способы перебора массивов

const number = [54, 20, 80, -35, 32, 29, 15];

const names = ["vladiMir", "Mark", "Logan", "Victor", "maks", "Kate", "Alex"];

const mix = ["Glo", 25, true, "Academy", "15", -2, null];

const badNum = [45, 20, 74, -35, "hi", 32, 29, 5];

// for (let i = 0; i < mix.length; i++) {
//   console.log(mix[i]);
// }

//Обычно для объектов
// for (let index in mix) {
//   console.log(index + " " + mix[index]);
// }

//elem - получит сами элементы
// for (let elem of mix) {
//   console.log(elem);
// }

// mix.forEach(function (item, index, arr) {
//   console.log(item);
// });

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// }

// names.forEach(function (item, i, arr) {
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(names);

// const correctName = names.map(function (item) {
//   return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });

// console.log(correctName);

//
//
//
//

// let forWords = [];
// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "string" && isNaN(mix[i])) {
//     forWords.push(mix[i]);
//   }
// }
// console.log(forWords);

// let filterWords = mix.filter((item) => {
//   return typeof item === "string" && isNaN(item);
// });
// console.log(filterWords);

//
//
//
//

// let positiveNumbers = number.filter((item) => item > 0);
// console.log(positiveNumbers);

//
//
//

// let result = false;
// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "number") {
//     result = true;
//     break;
//   }
// }
// console.log(result);

// let result2 = mix.some(function (item) {
//   //   console.log(item);
//   return typeof item === "number";
// });
// console.log(result2);

//
//
//
// let result = number.every(function (item) {
//   return typeof item === "number";
// });
// console.log(result);

//
//
//

// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// // console.log(sum);

// let sum2 = number.reduce(function (accumulator, item) {
//   console.log(accumulator, item);
//   return accumulator + item;
// }, 0);
// console.log(sum2);
// //
// //
// //
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const res = arr.reduceRight((acc, item) => acc.concat(item), []);
// console.log(res);

//
//
//
//
//

// после  fetch можем обрабатывать наш json
// fetch("./namefile.json")
//   .then((response) => response.json())
//   .then((data) => practice(data));
//   .catch(err => console.error(err));

function practice(response) {
  // const allHeroes = response.map(({name, genger, photo}) => ({
  //     name, genger, photo
  // }));
  // response.forEach(item => allHeroes.push(item.name));
  // console.log(allHeroes);
  //
  //
  //
  // const aliveHeroes = response.filter(item =< item.status === 'alive');
  // console.log(aliveHeroes)
  //
  //
  // const chinaHero = response.some(item => item.citizenship === 'Chinese');
  // const whoChinese = response.filter(item => item.citizenship === 'Chinese');
  // console.log(chinaHero);
  // console.log(whoChinese);
  //
  //
  //
  // const hero = response.every(item => item.genger);
  // console.log(hero);
  //
  //
  //
  const heroes = response.reduce((accum, item) => {
    return accum.concat(item.name);
  }, []);
  console.log(heroes);
}
