//Variables
let firstNum;
let secondNum;
let operator;

// Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, op, b) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  }
}

console.log(operate(2, "+", 5));
console.log(operate(50, "/", 5));

const btnEqual = document.querySelector(".btnEqual");

btnEqual.addEventListener("mousedown", (e) => {
  btnEqual.style.cssText += "background:grey";
});

btnEqual.addEventListener("mouseup", (e) => {
  btnEqual.removeAttribute("style");
});
