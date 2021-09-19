("use strict");

// Конструкция try catch - простая, - помогает оставлять код рабочим, даже если в каком-то блоке возникнет ошибка
try {
  console.log("Hello world");
  const a = () => {
    console.og("I am study JavaScript!");
  };
  a();
} catch (error) {
  console.warn(error.name);
  console.warn(error.message);
  //error.stack тоже, что и error
  console.warn(error.stack);
} finally {
  console.log("Я все равно работаю!");
}
// finally - Этот блок все-равно не работает
console.log("Я все равно работаю");
