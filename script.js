"use strict";

//Если это число - true, если не число - false; isFinite - число конечное?-true, бесконечное - false
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let addExpenses = prompt(
  "Перечислите возможные расходы за расчитываемый период через запятую"
);
// let expenses1, expenses2;
let expenses = [];

let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

function getExpensesMonth(sum1, sum2) {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?", "Садик");

    let amount = prompt("Во сколько это обойдется?");
    while (!isNumber(amount)) {
      amount = prompt("Во сколько это обойдется?");
    }
    sum += Number(amount);
  }
  console.log(expenses);
  return sum;
}
let expensesAmount = getExpensesMonth();

function getAccumulatedMonth(income, expenses) {
  return income - expenses;
}

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

function getTargetMonth(target, accumulatedMonth) {
  return target / accumulatedMonth;
}

let income = "Фриланс";
let mission = 150000;
let period = 12;
let budgetDay = accumulatedMonth / 30;
let monthMission = Math.ceil(mission / accumulatedMonth);
let showTypeOf = function (data) {
  console.log(data, typeof data);
};

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return "У вас большой уровень дохода";
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (budgetDay < 600 && budgetDay > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (budgetDay < 0) {
    return "Что то пошло не так";
  }
};

showTypeOf(money);
showTypeOf(income);
// showTypeOf(deposit);

console.log("Расходы за месяц " + expensesAmount);
console.log(getStatusIncome());
// console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));
console.log("Бюджет на день " + Math.floor(budgetDay));

if (monthMission <= 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log("Цель будет достигнута за " + monthMission + " месяцев");
}
