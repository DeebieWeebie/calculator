// Calculator JS //

let fixedNum = 6;
let a = 0;  // assign this value with an input/event listener
let b = 0;  // assign this value with an input/event listener

const inputLeft = document.querySelector(".input__left");
const inputRight = document.querySelector(".input__right");

// count the number of clicks?  If inputLeft = 1, operator = 1, then set b?
//  for larger digits, keep reassigning a by adding new digit press to a
// ADD CLICKCOUNTS AND EQUALITY NEXT

inputLeft.addEventListener("click", function(event) {
    if (event.target.classList.contains("input__numeric")) {
        const number = event.target.value;
        a = parseFloat(number);
    // } else if (event.target.classList.contains("input__decimal")) {
    //     const decimal = event.target.value;
    // } else if (event.target.class.contains("input__backspace")) {
        // something about removing the last part of the digit
    }
    console.log(a);
    console.log(typeof(a));
});

inputRight.addEventListener("click", function(event) {
    if (event.target.classList.contains("input__operator")) {
        operator = event.target.value;
    }
    console.log(operator);
});


const add = (a, b) => roundAns(a + b);

const subtract = (a, b) => roundAns(a - b);

const multiply = (a, b) => roundAns(a * b);

const divide = (a, b) => roundAns(a / b);

const roundAns = ans => (Number.isInteger(ans)) ? ans : Number(ans.toFixed(fixedNum));

let operator = {
    addition: "+",
    subtraction: "-",
    multiplication: "*",
    division: "/",
}

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

