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


