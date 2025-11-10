// Calculator JS //

let fixedNum = 6;
// let a = 0;  assign this value with an input/event listener
// let b = 0;  assign this value with an input/event listener
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

