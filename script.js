"use strict";

let money;
let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

//Если это число - true, если не число - false; isFinite - число конечное?-true, бесконечное - false
// Проверка что число !isNumber
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//Проверка что строка  isString
function isString(n) {
  return !isNaN(parseFloat(n)) || n.trim() === "" || n === null;
}

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  period: 3,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный источник заработка?")) {
      let itemIncome = prompt("Какой у вас дополнительный заработок", "Таксую");
      while (isString(itemIncome)) {
        itemIncome = prompt("Какой у вас дополнительный заработок", "Таксую");
      }
      let cashIncome = prompt(
        "Сколько в месяц вы на этом зарабатываете?",
        10000
      );
      while (!isNumber(cashIncome)) {
        cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
      }
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt(
      "Перечислите возможные расходы за расчитываемый период через запятую"
    );
    while (isString(addExpenses)) {
      addExpenses = prompt(
        "Перечислите возможные расходы за расчитываемый период через запятую"
      );
    }
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    let costs = addExpenses.split(", ");
    let array = [];
    for (let addExpense of appData.addExpenses) {
      addExpense = addExpense.charAt(0).toUpperCase() + addExpense.substring(1);
      array.push(addExpense);
    }
    console.log(array.join(", "));

    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      let key = prompt(
        "Введите обязательную статью расходов?",
        "Указываем разные"
      );
      let value = prompt("Во сколько это обойдется?");
      while (!isNumber(value)) {
        value = prompt("Во сколько это обойдется?");
      }
      appData.expenses[key] = value;
    }
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },

  getBudget: function () {
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    return;
  },

  getTargetMonth: function () {
    let monthMission = Math.ceil(+appData.mission / +appData.budgetMonth);

    if (monthMission <= 0) {
      return "Цель не будет достигнута";
    } else {
      return "Цель будет достигнута за " + monthMission + " месяцев";
    }
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "У вас большой уровень дохода";
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return "У вас средний уровень дохода";
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else if (appData.budgetDay < 0) {
      return "Что то пошло не так";
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = prompt("Какой годовой процент?", "10");
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt("Какой годовой процент?", "10");
      }
      appData.moneyDeposit = prompt("Какая сумма заложена", 10000);
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt("Какая сумма заложена", 10000);
      }
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log("Расходы за месяц " + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

function progFile(name) {
  console.log("Наша программа включает в себя данные: ");
  for (let key in name) {
    console.log("Свойство " + key + " Значение " + name[key]);
  }
}
progFile(appData);
