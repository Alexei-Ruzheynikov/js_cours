"use strict";

const buttonSignup = document.querySelector(".button-signup");
const buttonSignin = document.querySelector(".button-signin");
const userListItems = document.querySelector(".user-list");
const greetingBlock = document.querySelector(".greeting-block");

let userList = [];

function User(name, surname, regdate, login, password) {
  this.userName = name;
  this.userSurname = surname;
  this.regDate = regdate;
  this.login = login;
  this.password = password;
}

const deleteItemByValue = function (Arr, val) {
  Arr.forEach((el, ind) => {
    if (el.login === val) Arr.splice(ind, 1);
  });
};

const render = function () {
  getDataFromLocalStorage();
  userListItems.textContent = "";
  userList.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.userLogin = item.login;
    li.classList.add("user-list-item");
    li.innerHTML = `<span class='user-info user-name'>Имя
    <span class='user-info user-name'>${item.userName}</span>,
    фамилия:
    <span class='user-info user-surname'>${item.userSurname}</span>,
    зарегистрирован:
    <span class='user-info user-tegdate'>${item.regDate}</span>
    </span>
    <button class='user-remove'></button>
    `;
    userListItems.append(li);
    const userRemove = li.querySelector(".user-remove");
    userRRemove.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      let valueTodelete = parent.dataset.userLogin;
      debugger;
      deleteItemByValue(userList, valueToDelete);
      sendDataToLocalStorage();
      render();
    });
  });
};
