// Calculator JS //

let firstNumber = null;  
let operator = null;
let displayValue = "";
let isReadyForNewInput = false;  // set to true after the operator is pressed

const displayWindow = document.querySelector(".display__window");
const inputLeft = document.querySelector(".input__left");
const inputRight = document.querySelector(".input__right");
const inputBottom = document.querySelector(".input__bottom");
const clearButton = document.querySelector(".display__clear");

function updateDisplay() {
    if (displayValue === "") {
        displayWindow.textContent = "0";  // user always sees 0 when calulator 
    } else {                                // is clear or reloads
        displayWindow.textContent = displayValue;
    }
}

function handleInputDigit(digit) {
    if (isReadyForNewInput === true) {
        displayValue = digit;
        isReadyForNewInput === false;
    } else {                            // stops the leading 0 on the digit
        if (displayValue === "0") {
            displayValue = digit;
        } else {
            displayValue + digit;
        }
    }
    updateDisplay();
}

function handleInputDecimal(dot) {
    if (isReadyForNewInput === true) {
        alert("When entering a non-integer value like 0.2, you must type the zero first")
        return;                         // if an operator has been pressed & 
    }                                   // then a decimal, the user is asked to
                                         // type a zero first and the code exits
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
    updateDisplay();
}

// function handleBackspace() {

// }

inputLeft.addEventListener("click", function(event) {
    if (event.target.classList.contains("input__numeric")) {
        handleInputDigit(event.target.value);
    } else if (event.target.classList.contains("input__decimal")) {
        handleInputDecimal(event.target.value);
    } else if (event.target.classList.contains("input__backspace")) {
        handleBackspace();
    }
});

inputRight.addEventListener("click", function(event) {
    if (event.target.classList.contains("input__operator")) {
        handleOperator(event.target.value);
    }
});

inputBottom.addEventListener("click", function(event) {
    if (event.target.classList.contains("input__equality")) {
        handleOperator(event.target.value);
    }
});

updateDisplay();

const add = (a, b) => roundAns(a + b);

const subtract = (a, b) => roundAns(a - b);

const multiply = (a, b) => roundAns(a * b);

const divide = (a, b) => roundAns(a / b);

const roundAns = ans => (Number.isInteger(ans)) ? ans : Number(ans.toFixed(fixedNum));

let operate = function(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    }   else if (operator === "/") {
        return divide(a, b);
    }
}

console.log(operate("/", 4, 6));

// console.log(add(3.33333, 3.666666));
// console.log(add(-4.77777, -9.999999));
// console.log(subtract(6.666666666, 9999.999999));
// console.log(multiply(2, 3));
// console.log(divide(3, 2));

    // } else if (event.target.classList.contains("input__decimal")) {
    //     const decimal = event.target.value;
    // } else if (event.target.class.contains("input__backspace")) {
        // something about removing the last part of the digit