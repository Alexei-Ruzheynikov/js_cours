"use strict";

class Character {
  static world = "Азерот";
  static create = () => {
    console.log("Создаем персонажа");
  };
  constructor() {
    Character.create();
  }
}

// Character.world = "Азерот";
// Character.create = () => {
//   console.log("Создаем персонажа");
// };
console.log(new Character());
Character.create();
