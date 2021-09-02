"use strict";

function Func(name) {
  name;
  if (typeof name !== "string") {
    return "Передана не строка ";
  } else {
    if (name.length > 30) {
      name = name.slice(0, 30) + "...";
    }
    return name.trim();
  }
}
console.log(
  Func("   213dddddddccccccccccccccdddddddddddddddddddddddddddddd   ")
);
