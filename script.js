// "use strict";

let start = document.getElementById("start"),
  btnPlus = document.getElementsByTagName("button"),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.querySelector("#deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  expensesMonthValue = document.getElementsByClassName(
    "expenses_month-value"
  )[0],
  additionalIncomeValue = document.getElementsByClassName(
    "additional_income-value"
  )[0],
  additionalExpensesValue = document.getElementsByClassName(
    "additional_expenses-value"
  )[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  targetMonthValue = document.getElementsByClassName("target_month-value")[0],
  expensesTitle = document.querySelector(".expenses-title"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  incomeTitle = document.querySelector(".income-title"),
  salaryAmount = document.querySelector(".salary-amount"),
  periodSelect = document.querySelector(".period-select"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  incomeItems = document.querySelectorAll(".income-items");

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
  incomeMonth: 0,
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();

    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();

    periodSelect.addEventListener("input", function () {
      incomePeriodValue.value = appData.calcPeriod();
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let incomeTitle = item.querySelector(".income-title").value;
      let incomeAmount = item.querySelector(".income-amount").value;
      if (incomeTitle !== "" && incomeAmount !== "") {
        appData.income[incomeTitle] = incomeAmount;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },
  asking: function () {
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    let costs = addExpenses.split(", ");
    let array = [];
    for (let addExpense of appData.addExpenses) {
      addExpense = addExpense.charAt(0).toUpperCase() + addExpense.substring(1);
      array.push(addExpense);
    }
    console.log(array.join(", "));

    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },

  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    return;
  },

  getTargetMonth: function () {
    return +targetAmount.value / +appData.budgetMonth;

    // if (monthMission <= 0) {
    //   return "Цель не будет достигнута";
    // } else {
    //   return "Цель будет достигнута за " + monthMission + " месяцев";
    // }
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
  calcPeriod: function () {
    return appData.budgetMonth * periodSelect.value;
  },
};

start.addEventListener("click", appData.start);

expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);

// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.getInfoDeposit();

// console.log(appData.getTargetMonth());

// function progFile(name) {
//   console.log("Наша программа включает в себя данные: ");
//   for (let key in name) {
//     console.log("Свойство " + key + " Значение " + name[key]);
//   }
// }
// progFile(appData);
let eventFunc = function (event) {
  let eventValue = event.target.value;
  let periodAmount = document.querySelector(".period-amount");
  periodAmount.innerHTML = eventValue;
};
document.querySelector(".period-select").addEventListener("input", eventFunc);

start.disabled = true;
let startButton = function (event) {
  if (salaryAmount.value === "" || !isNumber(salaryAmount.value)) {
    start.disabled = true;
  } else {
    start.disabled = false;
  }
};
salaryAmount.addEventListener("input", startButton);
