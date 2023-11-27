//Variables
const display = document.querySelector(".textDisplay");
let firstNum;
let secondNum;
let operator;
let displayValue;

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

function updateDisplay() {
  display.textContent = displayValue;
}

function clearDisplay() {
  display.textContent = "";
}

const btn = document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("mousedown", (e) => {
    element.style.cssText += "background:grey";
  });
  element.addEventListener("mouseup", (e) => {
    element.removeAttribute("style");
  });
});

const btnClick = document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", (e) => {
    displayValue = element.innerHTML;

    updateDisplay();
  });
});

document.querySelector(".btnAc").addEventListener("click", (e) => {
  clearDisplay();
});
