// Calculator JS //

let roundDecimalPlaces = 6;
let firstNumber = null;  
let operator = null;
let displayValue = "";
let isReadyForNextNumber = false;  // set to true after the operator is pressed
                                // pressing an operator switches this to true
                                // when a 1st number exists.

const displayWindow = document.querySelector(".display__window");
const inputLeft = document.querySelector(".input__left");
const inputRight = document.querySelector(".input__right");
const inputBottom = document.querySelector(".input__bottom");
const clearButton = document.querySelector(".display__clear");

function updateDisplay() {
    if (displayValue === "") {
        displayWindow.textContent = "0";  // user always sees 0 when calulator 
    } else {                               // display has been cleared 
        displayWindow.textContent = displayValue;
    }
}

function handleInputDigit(digit) {
    if (isReadyForNextNumber === true) {   // this means operator was pressed &
        displayValue = digit;           // displays next digit pressed as 2nd #
        isReadyForNextNumber = false;     // turns isReadyForNewInput to false
    } else {                            //                         
        if (displayValue === "0") {     // if display value is zero, sets the
            displayValue = digit;       // display value to the digit entered
        } else {
            displayValue += digit;       // otherwise add the digit to the 
        }                               // display value
    }
    updateDisplay();
}

function handleInputDecimal(dot) {
    if (isReadyForNextNumber === true) {
        alert("When entering a non-integer value like 0.2, you must type the zero first")
        return;                         // if an operator has been pressed & 
    }                                   // then a decimal, the user is asked to
                                         // type a zero first and the code exits
    if (!displayValue.includes(dot)) {  // if the display value doesn't include
        displayValue += dot;            // a dot already, then add a dot to the
    }                                   // display value.

    updateDisplay();
}

function handleBackspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function handleOperator(nextOperator) {
    if (firstNumber === null) {
        firstNumber = displayValue;
    }
    // isReadyForNew input is false if user has finished entering a 2nd number
    // and pressed another operator.  !isReadyForNewInput is !false = true, so
    // the secondNumber is stored and numbers 1 & 2 are evaluated and displayed.

    if (firstNumber !== null && operator !== null && !isReadyForNextNumber) {
        secondNumber = parseFloat(displayValue);
        let result = operate(operator, parseFloat(firstNumber), secondNumber);
        
        displayValue = String(result);
        updateDisplay();
        
        firstNumber = String(result); // Result becomes the new starting number
        isReadyForNextNumber = true;
    }

    operator = nextOperator;
    isReadyForNextNumber = true;
    updateDisplay();
}

function handleEquals() {
    if (firstNumber !== null && operator !== null && !isReadyForNextNumber) {
        secondNumber = parseFloat(displayValue);
        let result = operate(operator, parseFloat(firstNumber), secondNumber);
        
        displayValue = String(result);
        updateDisplay();
        
        firstNumber = String(result); 
        operator = null; 
        isReadyForNextNumber = true;
    }
}

clearButton.addEventListener("click", function(event) {
    firstNumber = null;
    operator = null;
    displayValue = "";
    isReadyForNextNumber = false;
    updateDisplay();
});

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
        handleEquals();
    }
});

updateDisplay();

function add(a, b) {    // const add = (a, b) => roundAns(a + b);
    return roundAns(a + b);
}

function subtract(a, b) {   // const subtract = (a, b) => roundAns(a - b);
    return roundAns(a - b);
}

function multiply(a, b) {   // const multiply = (a, b) => roundAns(a * b);
    return roundAns(a * b);
}

function divide(a, b) {     // const divide = (a, b) => roundAns(a / b);
    return roundAns(a / b);
}

// const roundAns = ans => (Number.isInteger(ans)) ? ans : Number(ans.toFixed(roundDecimalPlaces));

function roundAns(ans) {
    if (Number.isInteger(ans)) {
        return ans;
    } else {
        return Number(ans.toFixed(roundDecimalPlaces));
    }
}

let operate = function(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/" && b !== 0) {
        return divide(a, b);
    } else if (operator === "/" && b == 0) {
        alert("You cannot divide by zero! Press clear to start over!");
    }
}

