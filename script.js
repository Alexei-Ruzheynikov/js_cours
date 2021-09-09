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

const AppData = function () {
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.incomeMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

//Если это число - true, если не число - false; isFinite - число конечное?-true, бесконечное - false
// Проверка что число !isNumber
AppData.prototype.isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
//Проверка что строка  isString
AppData.prototype.isString = function (n) {
  return !isNaN(parseFloat(n)) || n.trim() === "" || n === null;
};

AppData.prototype.start = function () {
  appData.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();

  this.showResult();
  this.getBlockInputs();
};
AppData.prototype.reset = function () {
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

  this.budgetMonth = 0;
  this.budgetDay = 0;
  this.expensesMonth = 0;
  this.addIncome = [];
  this.addExpenses = [];
  this.income = {};
  this.expenses = {};
  this.removeNewItems();
  incomePlus.style.display = "block";
  expensesPlus.style.display = "block";
};
AppData.prototype.showResult = function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.budgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(", ");
  additionalIncomeValue.value = this.addIncome.join(", ");
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcPeriod();

  periodSelect.addEventListener("input", function () {
    incomePeriodValue.value = _this.calcPeriod();
  });
};
AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  cloneExpensesItem.querySelectorAll("input").forEach(function (elem) {
    elem.value = "";
  });
  expensesItems = document.querySelectorAll(".expenses-items");
  if (expensesItems.length === 3) {
    expensesPlus.style.display = "none";
  }
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  cloneIncomeItem.querySelectorAll("input").forEach(function (elem) {
    elem.value = "";
  });
  incomeItems = document.querySelectorAll(".income-items");
  if (incomeItems.length === 3) {
    incomePlus.style.display = "none";
  }
};
AppData.prototype.getExpenses = function () {
  const _this = this;
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector(".expenses-title").value;
    let cashExpenses = item.querySelector(".expenses-amount").value;
    if (itemExpenses !== "" && cashExpenses !== "") {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function () {
  const _this = this;

  incomeItems.forEach(function (item) {
    let incomeTitle = item.querySelector(".income-title").value;
    let incomeAmount = item.querySelector(".income-amount").value;
    if (incomeTitle !== "" && incomeAmount !== "") {
      _this.income[incomeTitle] = incomeAmount;
    }
  });
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};
AppData.prototype.getAddExpenses = function () {
  let addExpenses = additionalExpensesItem.value.split(",");
  const _this = this;

  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== "") {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const _this = this;

  additionalIncomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== "") {
      _this.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.asking = function () {
  this.addExpenses = addExpenses.toLowerCase().split(", ");
  let costs = addExpenses.split(", ");
  let array = [];
  for (let addExpense of this.addExpenses) {
    addExpense = addExpense.charAt(0).toUpperCase() + addExpense.substring(1);
    array.push(addExpense);
  }
  console.log(array.join(", "));

  this.deposit = confirm("Есть ли у вас депозит в банке?");
};
AppData.prototype.getExpensesMonth = function () {
  let sum = 0;
  for (let key in this.expenses) {
    sum += +this.expenses[key];
  }
  this.expensesMonth = sum;
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = this.budgetMonth / 30;
  return;
};

AppData.prototype.getTargetMonth = function () {
  return +targetAmount.value / +this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return "У вас большой уровень дохода";
  } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (this.budgetDay < 600 && this.budgetDay > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (this.budgetDay < 0) {
    return "Что то пошло не так";
  }
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    this.percentDeposit = prompt("Какой годовой процент?", "10");
    while (!isNumber(this.percentDeposit)) {
      this.percentDeposit = prompt("Какой годовой процент?", "10");
    }
    this.moneyDeposit = prompt("Какая сумма заложена", 10000);
    while (!isNumber(this.moneyDeposit)) {
      this.moneyDeposit = prompt("Какая сумма заложена", 10000);
    }
  }
};
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getBlockInputs = function () {
  textInputs.forEach(function (textInput) {
    textInput.disabled = true;
  });
  incomePlus.disabled = true;
  expensesPlus.disabled = true;
  start.style.display = "none";
  reset.style.display = "block";
};
AppData.prototype.getUnblockInputs = function () {
  allInputs.forEach(function (allInput) {
    allInput.disabled = false;
  });
  incomePlus.disabled = false;
  expensesPlus.disabled = false;
  start.style.display = "block";
  reset.style.display = "none";
};
AppData.prototype.removeNewItems = function () {
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
};

AppData.prototype.eventListeners = function () {
  start.disabled = true;
  start.style.cursor = "not-allowed";
  salaryAmount.addEventListener("input", function () {
    let matchValue = (salaryAmount.value = salaryAmount.value.replace(
      /[^0-9]/,
      ""
    ));
    if (salaryAmount.value !== "" && salaryAmount.value.match(matchValue)) {
      start.disabled = false;
      start.style.cursor = "pointer";
    } else {
      start.disabled = true;
      start.style.cursor = "not-allowed";
    }
  });
  start.addEventListener("click", this.start.bind(this));
  reset.addEventListener("click", this.reset.bind(this));
  expensesPlus.addEventListener("click", this.addExpensesBlock.bind(this));
  incomePlus.addEventListener("click", this.addIncomeBlock.bind(this));
  // periodSelect.addEventListener("input", this.getInfoPeriod);
};

const appData = new AppData();
appData.eventListeners();
