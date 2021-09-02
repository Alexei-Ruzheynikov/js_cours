"use strict";
// Строгий режим - эта директива появилась в спецификации es5 - она указывает, что нужно обрабатывать код по современным правилам. Исправляет ошибки, увеличивает безопасность, ускоряет отладку кода, код становится оптимизированным. Пишем его в самом начале

// выдаст модальное окно с ок и cancel, возвращает boolean true или false
// let question = confirm("Тебе есть 18 лет?");
//prompt - возвращает строку всегда, 2 параметром можно указать дефолтное значение, cancel - вернет null
// let question2 = prompt("Сколько тебе лет?", "18");
// console.log(question2);
// перед prompt пишем + +prompt - для преобразования в число

// console.log(5 + "5");
// console.log(typeof (5 + "5"));
// console.log(5 - "5");
// console.log(5 * "5");
// console.log(5 / "5");
// console.log("js" / "5");
// console.log(5 == "5");
// console.log(Boolean(5));
// console.log(!!"5");
//String - преобразует в строку
// console.log(typeof String(10));
// если число сложить с пустой строкой, то получим тип данных - строка
// console.log(10 + "");
//10 .toString() или 10..toString() или (10).toString() - преобразовать в строку
// console.log(typeof (10).toString());

// Number Преобразует в число
// console.log(typeof Number("33"));
//+ - тернарный оператор плюс приводит к типу данных число
// console.log(typeof +"33");

// умнажение на 1  преобразует строку в число
// let n = "10";
// n *= 1;
// console.log(typeof n);

//parseInt и parseFloat преобразует в тип данных число по символьно, буквы не переведет
// console.log(parseInt("10 px"));
// console.log(parseFloat("10.5 px"));

// if (true) console.log("Истина");
// if (false) console.log("Этот код не выполнится");

let n = 5;
if (n === 5) {
  console.log("Команда 1");
} else if (n === 4) {
  console.log("Команда 2");
} else {
  console.log("Не верно");
}

switch (n) {
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 5:
    console.log(5);
    break;
  case 6:
    console.log(6);
    break;
  default:
    console.log("не верно");
}

let result = n === 5 ? "верно" : "не верно";
console.log("result ", result);
