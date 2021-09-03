"use strict";

//Задача 1
let arr = ["123", "42", "75", "43", "746", "634", "23"];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].substring(0, 1) == 2 || arr[i].substring(0, 1) == 4) {
    // console.log(arr[i]);
    newArr.push(arr[i]);
  }
}
console.log(newArr);

//Задача 2
for (let i = 1; i <= 100; i++) {
  if (i === 1) {
    continue;
  }
  let flag = false;
  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
      flag = true;
      break;
    }
  }
  if (flag === false) {
    console.log(i + " Делители этого числа: 1 и " + i);
  }
}
