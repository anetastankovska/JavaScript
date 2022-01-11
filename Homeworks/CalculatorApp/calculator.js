/*Create a web calculator with all the standard features. The calculator should have buttons for the numbers to click (just like calculators in real life, no inputs!). It should have buttons for the operations: Sum, Subtract, Multiply and Divide. It should also have the standard buttons equals, decimal dot and reset ( C ). There should be a display where we can see the numbers that we are entering and results (like calculators in real life). The calculator should show error message if number is too large or if we are dividing by zero.

Note: The eval() function is not allowed! */

let memory = document.getElementById("memory");
let equals = document.getElementById("equals");
let resultDisplay = document.getElementById("result");

let isCalculated = false;
let result = "";
let equation = "";
function displayOperator(input) {
    if (isCalculated === true) {
        memory.innerHTML = result;
        memory.innerHTML += `<span class="operators">${input}</span>`;
        isCalculated = false;
    } else {
        memory.innerHTML += `<span class="operators">${input}</span>`;
    }
    equation += input;
}

function displayDigits(input) {
    if (isCalculated === true) {
        memory.innerHTML = result;
        memory.innerHTML += `<span class="digits">${input}</span>`;
        isCalculated = false;
    } else {
        memory.innerHTML += `<span class="digits">${input}</span>`;
    }
    equation += input;
}

function calculate () {
    result = eval(equation);
    resultDisplay.innerHTML = result;
    equation = result;
    // memory.innerHTML = "";
    isCalculated = true;
}

console.log(equation);

function reset () {
    memory.innerHTML = "";
    resultDisplay.innerHTML = "";
    equation = "";
}


