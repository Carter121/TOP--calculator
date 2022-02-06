const buttons = document.querySelectorAll<HTMLInputElement>("button");
const displayEl = document.querySelector<HTMLInputElement>(".display");

//* Numbers
let numbers = {
	num1: 0,
	num2: 0,
	operation: "null",
	newOperation: "null",
	isNumOne: true,
};
let displayValue: number = 0;
let tempInputValue: string = "";
let result: number = null;
let gotResult: boolean = false;

buttons.forEach((e) => {
	e.addEventListener("click", () => input(e.value));
});

function input(value: string) {
	//* If choosing number one display the value
	if (numbers.isNumOne && !isNaN(parseInt(value))) {
		tempInputValue += value;
		numbers.num1 = parseInt(tempInputValue);
		displayValue = numbers.num1;
		updateDisplay();

		//* If choosing number two display the value
	} else if (!numbers.isNumOne && !isNaN(parseInt(value))) {
		tempInputValue += value;
		numbers.num2 = parseInt(tempInputValue);
		displayValue = numbers.num2;
		updateDisplay();

		//* If already got result and didn't press equal
	} else {
		getOperation(value);
	}
	console.log([numbers.num1, numbers.num2]);
}

//* Math
function getOperationResult(operation: string, num1: number, num2: number) {
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

function add(x: number, y: number) {
	result = x + y;
	numbers.num1 = result;
	numbers.num2 = 0;
	displayResult(result);
	console.log("add");
	numbers.operation = numbers.newOperation;
}

function subtract(x: number, y: number) {
	result = x - y;
	numbers.num1 = result;
	numbers.num2 = 0;
	displayResult(result);
	console.log("sub");
	numbers.operation = numbers.newOperation;
}

function multiply(x: number, y: number) {
	result = x * y;
	numbers.num1 = result;
	numbers.num2 = 0;
	displayResult(result);
	console.log("mul");
	numbers.operation = numbers.newOperation;
}

function divide(x: number, y: number) {
	result = x / y;
	numbers.num1 = result;
	numbers.num2 = 0;
	displayResult(result);
	console.log("div");
	numbers.operation = numbers.newOperation;
}

//* Display numbers
function updateDisplay() {
	displayEl.value = displayValue.toString();
}

//* Get operation
function getOperation(value: string) {
	numbers.isNumOne = false;
	tempInputValue = "";
	switch (value) {
		case "add":
			if (gotResult === false) {
				numbers.operation = "add";
				gotResult = true;
			} else {
				numbers.newOperation = "add";
				getOperationResult(numbers.operation, numbers.num1, numbers.num2);
			}
			break;
		case "subtract":
			if (gotResult === false) {
				numbers.operation = "subtract";
				gotResult = true;
			} else {
				numbers.newOperation = "subtract";
				getOperationResult(numbers.operation, numbers.num1, numbers.num2);
			}

			break;
		case "multiply":
			if (gotResult === false) {
				numbers.operation = "multiply";
				gotResult = true;
			} else {
				numbers.newOperation = "multiply";
				getOperationResult(numbers.operation, numbers.num1, numbers.num2);
			}
			break;
		case "divide":
			if (gotResult === false) {
				numbers.operation = "divide";
				gotResult = true;
			} else {
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

//* Display result
function displayResult(num: number) {
	displayEl.value = num.toString();
}

//* Clear numbers
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
