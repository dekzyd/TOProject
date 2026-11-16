const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let firstNum;
let secondNum;
let operator;
let resultDisplayed;

function render() {
    if (!operator) {
        display.textContent = firstNum || "0"
    }
    else {
        display.textContent = secondNum || firstNum
    }
}

function calculate() {
    const a = parseFloat(firstNum);
    const b = parseFloat(secondNum);

    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return b !== 0 ? divide(a, b) : "Error";
}

digits.forEach(btn => btn.addEventListener('click', () => {
    if (!operator) {
        firstNum += btn.textContent
    }
    else {
        secondNum += btn.textContent
    }
    render()
}))

oper