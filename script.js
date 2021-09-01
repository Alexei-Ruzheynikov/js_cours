// продакшн - это ветка master в гит

// let n = [1, 2, 3];
// let n = null;
// присваиваем null - чтобы очистить переменную, но при этом оставляем ее и можем воспользоваться ею потом(временно освобождаем память)

// массив с данными для заказчика в index.html указывать.(для того чтобы он менял данные).

//покажет все методы console
// console.log(console);
//Светофор для удобочитаемости console.log error - красный, warn - желтый
// console.error(123);
// console.warn(123);

// console.time("1");
//Здесь наш код. В итоге получим за какое время сработает. Внутри нужен идетификатор, например 1(любая строка), чтобы их связать.
// console.timeEnd("1");
//

// удобно выволить обьекты в массиве к примеру
// console.table()

//Для строк лучше использовать одинарный и обратные одинарные кавычки(для интерпаляции и т д)
// const str = "Привет";

//строки могут принимать эмодзи, юникоды, асси...(ascii)

// const js = "        js      ";
//trimStart - убирает пробелы слева (trimLeft - синоним)
// console.log(js.trimStart());
//trimEnd - убирает пробелы справа (trimRight - синоним)
// console.log(js.trimEnd());
//trim - убирает пробелы слева и справа
// console.log(js.trim());
//repeat - повторяет,в скобках укажем 1 - 1 раз 2 -2 раза покажет
// console.log(js.repeat(2));

// const js = "js";
//padStart - сделает столько пробелов слева- сколько нужно, указали 10, padEnd - справа.
// console.log(js.padStart(10));

// const js = "JavaScript Привет мир JS 19.0";
// includes - есть ли этот элемент - выведет true или false
// console.log(js.includes("Привет"));
// const searchStr = "Java";
//startsWith - строка начинается с этой переменной/строкой; endsWith - c конца
// console.log(js.startsWith(searchStr));
// replace - находит подстрорку и изменяет на ту, что указываем
// console.log(js.replace("Привет", "Hello"));

//Усложненное задание
// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;
const strNum = num.toString();
console.log("strNum", strNum);

// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их.
// Правильно использовать цикл или методы перебора.
// let mult = 1;
// for (let i = 0; i < strNum.length; i++) {
//   mult *= strNum[i];
// }
// console.log(mult);

//Или этот способ (reduce работает так - acc сохраняет результат и в n подставляется новое число и происходит умножение)
const arrNum = strNum.split("");
console.log(arrNum);
const mult = arrNum.reduce(function (acc, n) {
  return acc * n;
});
// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const n = mult ** 3;
// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(n.toString().substring(0, 2));

// От substr - желательно отказаться( т.к. убрали из спецификации)
