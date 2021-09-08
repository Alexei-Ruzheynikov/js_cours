// "use strict";

let start = document.getElementById("start"),
  reset = document.getElementById("cancel"),
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
  incomeItems = document.querySelectorAll(".income-items"),
  allInputs = document.querySelectorAll("input"),
  textInputs = document.querySelectorAll("input[type=text]"),
  periodAmount = document.querySelector(".period-amount");

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
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    this.getBlockInputs();
  },
  reset: function () {
    this.getUnblockInputs();
    allInputs.forEach(function (allInput) {
      allInput.value = "";
    });
    periodSelect.value = 1;
    periodAmount.textContent = 1;
    budgetDayValue.value = "";
    budgetMonthValue.value = "";
    expensesMonthValue.value = "";
    additionalIncomeValue.value = "";
    additionalExpensesValue.value = "";
    incomePeriodValue.value = "";
    targetMonthValue.value = "";

    appData.budgetMonth = 0;
    appData.budgetDay = 0;
    appData.expensesMonth = 0;
    appData.addIncome = [];
    appData.addExpenses = [];
    appData.income = {};
    appData.expenses = {};
    appData.removeNewItems();
    incomePlus.style.display = "block";
    expensesPlus.style.display = "block";
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
    cloneExpensesItem.querySelectorAll("input").forEach(function (elem) {
      elem.value = "";
    });
    expensesItems = document.querySelectorAll(".expenses-items");
    // appData.getValidateTextInput();
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    cloneIncomeItem.querySelectorAll("input").forEach(function (elem) {
      elem.value = "";
    });
    incomeItems = document.querySelectorAll(".income-items");
    // appData.getValidateTextInput();
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  },
  // getValidateText: function () {
  //   let textInputs = document.querySelectorAll('[placeholder="Наименование"]');
  //   textInputs.forEach(function (element) {
  //     element.addEventListener("input", function () {
  //       element.value = element.value.replace(/[^А-я-\s\,\?\.\!]/, "");
  //       console.log("element.value", element.value);
  //     });
  //   });
  // },
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
  getBlockInputs: function () {
    textInputs.forEach(function (textInput) {
      textInput.disabled = true;
    });
    incomePlus.disabled = true;
    expensesPlus.disabled = true;
    start.style.display = "none";
    reset.style.display = "block";
  },
  getUnblockInputs: function () {
    allInputs.forEach(function (allInput) {
      allInput.disabled = false;
    });
    incomePlus.disabled = false;
    expensesPlus.disabled = false;
    start.style.display = "block";
    reset.style.display = "none";
  },
  removeNewItems: function () {
    let newExpensesItems = document.querySelectorAll(".expenses-items");
    let newIncomeItems = document.querySelectorAll(".income-items");
    if (newExpensesItems.length > 1) {
      for (let i = 1; i < newExpensesItems.length; i++) {
        newExpensesItems[i].remove();
      }
    }
    if (newIncomeItems.length > 1) {
      for (let i = 1; i < newIncomeItems.length; i++) {
        newIncomeItems[i].remove();
      }
    }
  },
};

start.addEventListener("click", appData.start.bind(appData));
reset.addEventListener("click", appData.reset.bind(appData));
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
