// Calculator JS //

let fixedNum = 6;

const roundAns = ans => (Number.isInteger(ans)) ? ans : Number(ans.toFixed(fixedNum));

const add = (a, b) => roundAns(a + b);

const subtract = (a, b) => roundAns(a - b);

const multiply = (a, b) => roundAns(a * b);

const divide = (a, b) => roundAns(a / b);

console.log(add(3.33333, 3.666666));
console.log(add(-4.77777, -9.999999));
console.log(subtract(6.666666666, 9999.999999));
console.log(multiply(2, 3));
console.log(divide(3, 2));

