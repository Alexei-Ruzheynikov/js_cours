// let myVar;
// console.log("myVar ", myVar); //undefined

// //null - пустое значение
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// myVar = 10;
// console.log(typeof myVar);
// myVar = "Hello world";
// console.log(typeof myVar);
// myVar = true;
// console.log(typeof myVar);
// myVar = null;
// console.log(typeof myVar);
// myVar = undefined;
// console.log(typeof myVar);
// myVar = Symbol();
// console.log(typeof myVar);
// myVar = {};
// console.log(typeof myVar);

//Всего - 7 типов данных
// console.log(typeof myVar);

//  массивы, рег выражения и т д - это тип данных Объект
// let myArr = [];
// let regExp = /w+/g;
// let func = function () {};
// let error = Error("error message");
// let date = new Date();
// console.log(typeof myArr);

//Какой тип данных - typeof

// let myTrue = true;
// let myFalse = false;

// console.log(2 === 2);
// console.log(2 === 3);

//Преобразование в Boolean тип (после преобразования все значения будут  иметь true)
// console.log(Boolean(5));
// console.log(Boolean("Hello"));

//Исключение, число 0,undefined,null,NaN,'' принимают значение false
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// || - или && - и ! - отрицание
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(!true);
// console.log(!false);

//Числа бывают целые, дробные(с плавающе точкой), експенсеальная форма, двоичная форма, восьмеричная форма(лучше через букву o), шестнадцатеричная форма, бесконенчость,
// console.log(50);
// console.log(8.5);
// console.log(0.5);
// console.log(5e6);
// console.log(0b1111);
// console.log(0o11);
// console.log(0x22aacc);
// console.log(infinity);
// console.log(NaN);
// при делении числа на 0 получаем бесконечность
// 0 разделим на 0, бесконечность разделим на бесконечность, строку умножим на число - получим NaN

//Унарный плюс - для преобразования в тип данных число
// console.log(+5);
// console.log(-5);
// let i = 5;
//инкремент и декремент
// console.log(++i);
// console.log(i++);
// console.log(i);
// console.log(i--);
// console.log(i);
// console.log(--i);

//Бинарные операторы + - * / %

// let n = 15;
// // n = n + 3;
// n += 3;
// // n = n - 6;
// n -= 6;
// // n = n / 3;
// n /= 3;
// console.log(n);

//Равенства
// console.log(3 > 2);
// console.log(3 < 2);
// console.log(5 >= 3);
// console.log(10 <= 5);
// console.log(5 === 5);
// console.log(5 !== 6);
// console.log(5 == "5");
// console.log(5 != "5");

//Метод извлечения корня
// console.log(Math.sqrt(25));

//Метод pow возводит в степень
// console.log(Math.pow(5, 3));

//Целое ли число
// console.log(Number.isInteger(5.5));

// let myString = 'Hell "o" world!';
// console.log(myString);

// let str = "Hello my Friends!";
// console.log(str.length);
//вызывается метод () круглыми скобками вконце
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//charAt -возвращает символ по индексу
// console.log(str.charAt(0));
//charAt уже не используют, можно воспользоваться просто квадратными скобками и индексом
// console.log(str[0]);

//возвращают подстроку, не меняют исходную строку, а возвращают новую
// substring - от какого - до конца или от какого до какого
// console.log(str.substring(6));
// console.log(str.substring(9, 15));
// slice - можно указать минус - будет считать с конца
// console.log(str.slice(6));
// console.log(str.slice(-8));
// substr - с какого символа начать и сколько символов взять
// console.log(str.substr(6, 9));
// console.log(str);

// indexOf - вернет индекс подстроки в строке, где начинается, если не найдет - вернет -1
// console.log(str.indexOf("Friends"));

// replace - заменяет одно на другое
// console.log(str.replace("my Friends", "World"));

// split -разделяет на массив через разделитель
// let str = "apple, kiwi, orange";
// console.log(str.split(", "));

// Статьи по уроку
