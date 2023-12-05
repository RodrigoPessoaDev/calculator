//Variables
const display = document.querySelector(".textDisplay");
const expressionDisplay = document.querySelector(".expression");
const resultFinal = document.querySelector(".resultDisplay");
let firstNum;
let secondNum;
let equation;
let displayValue;
let expressionValue;

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
  expressionDisplay.textContent += displayValue;
  equation = expressionDisplay.textContent;
  resultFinal.textContent;
}

function clearDisplay() {
  display.textContent = "";
  expressionDisplay.textContent = "";
}

function clearResult() {
  resultFinal.textContent = "";
}

function calc(equation) {
  let terms = equation.split(/([+\-*/])/);

  let numbers = terms.map(function (term) {
    return isNaN(term) ? term : parseFloat(term);
  });

  for (let i = 1; i < numbers.length - 1; i += 2) {
    let operator = numbers[i];
    let operand = numbers[i + 1];

    if (operator === "*") {
      numbers[i - 1] *= operand;
      numbers.splice(i, 2);
      i -= 2;
    } else if (operator === "/") {
      numbers[i - 1] /= operand;
      numbers.splice(i, 2);
      i -= 2;
    }
  }

  let result = numbers[0];
  for (let i = 1; i < numbers.length - 1; i += 2) {
    let operator = numbers[i];
    let operand = numbers[i + 1];

    if (operator === "+") {
      result += operand;
    } else if (operator === "-") {
      result -= operand;
    }
  }
  return result;
}

const btn = document.querySelectorAll(".btn, .btnEqual").forEach((element) => {
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
    clearResult();
  });
});

const btnEqual = document
  .querySelector(".btnEqual")
  .addEventListener("click", (s) => {
    resultFinal.textContent = calc(equation);
    console.log(calc(equation));
    updateDisplay();
    clearDisplay();
  });

document.querySelector(".btnAc").addEventListener("click", (e) => {
  clearDisplay();
});
