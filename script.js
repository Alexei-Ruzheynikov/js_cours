"use strict";

class Todo {
  constructor(selectorToForm, selectorLists) {
    this.todoList = [];
    this.toForm = selectorToForm;
    this.toLists = selectorLists;
    this.elementsForm = new FormTodo().elements;
    this.lists = new ListTodo("todo-list", "todo-completed");
  }
  init() {
    this.todoList = JSON.parse(localStorage.getItem("todo-max") || "[]");
    this.todoList.forEach(this.renderItem, this);
    document.querySelector(this.toForm).append(this.elementsForm.form);
    this.elementsForm.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo(this.elementsForm.input.value);
      this.elementsForm.form.reset();
    });

    document
      .querySelector(this.toLists)
      .append(this.lists.todo, this.lists.todoCompleted);
  }

  renderItem({ id, text, check }) {
    const item = new TodoItem(text).item;
    check
      ? this.lists.todoCompleted.append(item.elem)
      : this.lists.todo.append(item.elem);

    item.btnComplete.addEventListener(
      "click",
      this.changeTodo.bind(this, id, item.elem)
    );
    item.btnRemove.addEventListener(
      "click",
      this.removeTodo.bind(this, id, item.elem)
    );
  }

  addTodo(text) {
    const todoItem = {
      id: (+new Date() + "").substring(4),
      text,
      check: false
    };
    this.todoList = [...this.todoList, todoItem];
    this.renderItem(todoItem);

    this.setLocalStorage();
  }
  setLocalStorage() {
    localStorage.setItem("todo-max", JSON.stringify(this.todoList));
  }
  removeTodo(id, elem) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
    this.setLocalStorage();
    elem.remove();
  }
  changeTodo(id, elem) {
    const item = this.todoList.find((item) => item.id === id);

    item.check
      ? this.lists.todo.append(elem)
      : this.lists.todoCompleted.append(elem);

    item.check = !item.check;
    this.setLocalStorage();
  }
}

class FormTodo {
  constructor() {
    this.elements = this.createForm();
  }
  createForm() {
    const form = document.createElement("form");
    form.classList.add("todo-control");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.classList.add("header-input");
    const button = document.createElement("button");
    button.classList.add("header-button");

    label.append(input);
    form.append(label, button);
    return { input, form };
  }
  submitForm() {}
}

class ListTodo {
  constructor(selectorList, selectorListComplete) {
    this.todo = this.createList(selectorList);
    this.todoCompleted = this.createList(selectorListComplete);
  }
  createList(selectorList) {
    const ul = document.createElement("ul");
    ul.classList.add("todo", selectorList);
    return ul;
  }
}
class TodoItem {
  constructor(text) {
    this.item = this.createItem(text);
  }
  createItem(text) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    const span = document.createElement("span");
    span.classList.add("text-todo");
    span.textContent = text;

    const buttons = document.createElement("div");
    buttons.classList.add("todo-buttons");

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("todo-remove");

    const btnComplete = document.createElement("button");
    btnComplete.classList.add("todo-complete");

    buttons.append(btnComplete, btnRemove);
    li.append(span, buttons);
    return {
      elem: li,
      btnRemove,
      btnComplete
    };
  }
}

const form = new Todo(".header", ".todo-container");

form.init();
