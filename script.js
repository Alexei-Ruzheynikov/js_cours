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
  money = prompt("Ваш месячный доход?");
  //   while (isNaN(money) || money.trim() === "" || money === null) {
  //     money = prompt("Ваш месячный доход?");
  //   }
  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?");
  }
};
start();

function getExpensesMonth(sum1, sum2) {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = +prompt(
      "Введите обязательную статью расходов?",
      "Садик государственный"
    );

    // if (i === 0) {
    //   expenses1 = +prompt(
    //     "Введите обязательную статью расходов?",
    //     "Садик государственный"
    //   );
    // } else if (i === 1) {
    //   expenses2 = +prompt(
    //     "Введите обязательную статью расходов?",
    //     "Садик частный"
    //   );
    // }

    sum += +prompt("Во сколько это обойдется?");
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
console.log("Цель будет достигнута за " + monthMission + " месяцев");
console.log("Бюджет на день " + Math.floor(budgetDay));
