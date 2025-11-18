![Logo of the project](/images/calculatorLogo.png)
# TOP Calculator Project
- This project was designed to exercise foundational concepts using HTML, CSS, 
  and JavaScript.

This is an onscreen calculator that will do typical math such as addition,
subtraction, multiplication and division of a single pair of numbers at a time.

## Basic TOP Instructions
- The calculator should have basic math operators (+, -, x, and ÷). Create 
  functions for the 4 math functions.

- A calculator operation consists of a number, an operator, and another number. 
  Create three variables, one for each part of the operation.

- Create a new function "operate" that takes an operator and two numbers and calls
  one of the above functions on the numbers

- The calculator should have buttons for each digit and operator (including =)
  along with a clear button.  

- EXTRA CREDIT:  
  Add a decimal button to allow for decimal input. 
  Only allow one decimal per number.
  Add a backspace button.
  Add keyboard support! (I did not implement this)

## Skills Developed
- Review:  HTML, CSS, and JavaScript
  - HTML exercise in BEM naming convention (not TOP required)
  - CSS exercise in flexbox (required by TOP) & consistent spacing conventions.
  - JavaScript exercise in event listeners.  
    - Event Delegation: attaching a single listener to a parent container
    - Conditional Execution:  targeting classList.contains ignores container clicks,
      padding clicks, etc.
    - Encapsulation: Calling out separate clearly named functions.
    
- JavaScript Challenges-More complex JS logic:
  - Boolean variable used to handle 2nd number input ready state when an operator 
    is pressed.  

### Lessons Learned
- I need much more practice using JavaScript Boolean variables.
- My BEM naming is possibly too long and slightly nested (input__operator is 
  named after parent input block and not input__right, per se)

#### Links
- Project homepage: https://deebieweebie.github.io/calculator/
