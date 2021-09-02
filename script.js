"use strict";

let money = +prompt("Ваш месячный доход?");
let addExpenses = prompt(
  "Перечислите возможные расходы за расчитываемый период через запятую"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let expenses1 = +prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = +prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

function getExpensesMonth(sum1, sum2) {
  return sum1 + sum2;
}

function getAccumulatedMonth(income, expenses) {
  return income - expenses;
}

let accumulatedMonth = getAccumulatedMonth(
  money,
  getExpensesMonth(amount1, amount2)
);

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
showTypeOf(deposit);

console.log(getExpensesMonth(amount1, amount2));
console.log(getStatusIncome());
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));
console.log("Цель будет достигнута за " + monthMission + " месяцев");
console.log("Бюджет на день " + Math.floor(budgetDay));
