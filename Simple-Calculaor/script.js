let currentNumber = "";
let displayElement;

window.onload = function() {
  displayElement = document.getElementById("result");
};

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentNumber += operator;
  updateDisplay();
}

function deleteCharacter() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

function clearResult() {
  currentNumber = "";
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = eval(currentNumber);
  } catch (error) {
    result = "Error";
  }
  currentNumber = result.toString();
  updateDisplay();
}

function updateDisplay() {
  displayElement.value = currentNumber;
}
