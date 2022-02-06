const buttons = document.querySelectorAll("button");
const displayEl = document.querySelector(".display");
let numbers = {
    num1: 0,
    num2: 0,
    operation: "null",
    newOperation: "null",
    isNumOne: true,
};
let displayValue = 0;
let tempInputValue = "";
let result = null;
let gotResult = false;
buttons.forEach((e) => {
    e.addEventListener("click", () => input(e.value));
});
function input(value) {
    if (numbers.isNumOne && !isNaN(parseInt(value))) {
        tempInputValue += value;
        numbers.num1 = parseInt(tempInputValue);
        displayValue = numbers.num1;
        updateDisplay();
    }
    else if (!numbers.isNumOne && !isNaN(parseInt(value))) {
        tempInputValue += value;
        numbers.num2 = parseInt(tempInputValue);
        displayValue = numbers.num2;
        updateDisplay();
    }
    else {
        getOperation(value);
    }
    console.log([numbers.num1, numbers.num2]);
}
function getOperationResult(operation, num1, num2) {
    switch (operation) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
}
function add(x, y) {
    result = x + y;
    numbers.num1 = result;
    numbers.num2 = 0;
    displayResult(result);
    console.log("add");
    numbers.operation = numbers.newOperation;
}
function subtract(x, y) {
    result = x - y;
    numbers.num1 = result;
    numbers.num2 = 0;
    displayResult(result);
    console.log("sub");
    numbers.operation = numbers.newOperation;
}
function multiply(x, y) {
    result = x * y;
    numbers.num1 = result;
    numbers.num2 = 0;
    displayResult(result);
    console.log("mul");
    numbers.operation = numbers.newOperation;
}
function divide(x, y) {
    result = x / y;
    numbers.num1 = result;
    numbers.num2 = 0;
    displayResult(result);
    console.log("div");
    numbers.operation = numbers.newOperation;
}
function updateDisplay() {
    displayEl.value = displayValue.toString();
}
function getOperation(value) {
    numbers.isNumOne = false;
    tempInputValue = "";
    switch (value) {
        case "add":
            if (gotResult === false) {
                numbers.operation = "add";
                gotResult = true;
            }
            else {
                numbers.newOperation = "add";
                getOperationResult(numbers.operation, numbers.num1, numbers.num2);
            }
            break;
        case "subtract":
            if (gotResult === false) {
                numbers.operation = "subtract";
                gotResult = true;
            }
            else {
                numbers.newOperation = "subtract";
                getOperationResult(numbers.operation, numbers.num1, numbers.num2);
            }
            break;
        case "multiply":
            if (gotResult === false) {
                numbers.operation = "multiply";
                gotResult = true;
            }
            else {
                numbers.newOperation = "multiply";
                getOperationResult(numbers.operation, numbers.num1, numbers.num2);
            }
            break;
        case "divide":
            if (gotResult === false) {
                numbers.operation = "divide";
                gotResult = true;
            }
            else {
                numbers.newOperation = "divide";
                getOperationResult(numbers.operation, numbers.num1, numbers.num2);
            }
            break;
        case "equals":
            getOperationResult(numbers.operation, numbers.num1, numbers.num2);
            break;
        case "clear":
            clearNumbers();
            break;
    }
}
function displayResult(num) {
    displayEl.value = num.toString();
}
function clearNumbers() {
    numbers = {
        num1: 0,
        num2: 0,
        operation: "null",
        newOperation: "null",
        isNumOne: true,
    };
    displayValue = 0;
    tempInputValue = "";
    result = null;
    gotResult = false;
    updateDisplay();
}
//# sourceMappingURL=main.js.map