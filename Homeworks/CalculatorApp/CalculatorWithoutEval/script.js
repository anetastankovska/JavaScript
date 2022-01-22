let resultDisplay = document.getElementById("result");
let memoryDisplay = document.getElementById("memory");
let digits = document.getElementsByClassName("digit");
let operators = document.getElementsByClassName("operator");
let resetButton = document.getElementById("reset");
let equalsButton = document.getElementById("equals");
let periodButton = document.getElementById("period");

let rawInputOne = "";
let rawOperator = ""
let rawInputTwo = "";
let isSecondInput = false;

function calculate (num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = "error";
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }
    return result;
}

//Adding event for digits
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function () {
        console.log(digits[i].value);
        // memoryDisplay.innerText += digits[i].value;
        if (isSecondInput === false) {
            rawInputOne += digits[i].value;
        } else {
            rawInputTwo += digits[i].value;
        }
        
        memoryDisplay.innerText = `${rawInputOne} ${rawOperator} ${rawInputTwo}`
    });
}


function checkForPeriods (str, period) {

}


//Adding event for period sign
periodButton.addEventListener('click', function () {
    if (isSecondInput === false) {
        if (!rawInputOne.includes(".")) {
            rawInputOne += ".";
        }
    } else if (isSecondInput === true) {
        if (!rawInputTwo.includes(".")) {
            rawInputTwo += ".";
        }
    }
    memoryDisplay.innerText = `${rawInputOne} ${rawOperator} ${rawInputTwo}`
})



//Adding event for operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        console.log(operators[i].value);
        // memoryDisplay.innerText += operators[i].value;
        rawOperator = operators[i].value;
        isSecondInput = true;
        memoryDisplay.innerText = `${rawInputOne} ${rawOperator} ${rawInputTwo}`
    })
}



//Adding event for the reset button
resetButton.addEventListener('click', function() {
    memoryDisplay.innerText = "";
    resultDisplay.innerText = "";
    finalResult = "";
    rawInputOne = "";
    rawInputTwo = "";
    rawOperator = "";
    isSecondInput = false;
})


//Adding event to equals button
equalsButton.addEventListener('click', function () {
    console.log(rawInputOne);
    console.log(rawInputTwo);
    let finalResult = calculate(rawInputOne, rawInputTwo, rawOperator);
    console.log(finalResult);
    rawInputOne = finalResult;
    resultDisplay.innerText = finalResult;
    finalResult = "";
    rawInputTwo = "";
    rawOperator = "";
    memoryDisplay.innerText = `${rawInputOne} ${rawOperator} ${rawInputTwo}`;
})



