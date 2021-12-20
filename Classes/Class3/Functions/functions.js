console.log("Is connected");

// Thisis the definition
function logMessage () {
    console.log("Hello from functions");
}

function sayHello () {
    let name = "Trajan";
    console.log("Hello from " + name);
}

// Here we execute the code from function
logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// you can execute this function n times


// function with parameters that does not return any value
// function sumOfNumbers(num, num1) {
//     let sum = num + num1;
//     console.log(sum);
// }

// sumOfNumbers(2, 5);
// sumOfNumbers(5, 9);
// sumOfNumbers(10, 1234);
// sumOfNumbers();

// function sumOfFourNumbers(num, num1, num2, num3) {
//     let sum = num + num1 + num2 + num3;
//     console.log(sum);
// }

// sumOfFourNumbers (1, 3, 5, 7);


// function with parameter thar returns some value

// function sumOfThreeNumbers(num, num1, num2) {
//     let sum = num + num1 + num2;
//     return sum;
// }

// let sumOfThreeNumbersResult = sumOfThreeNumbers(1, 2, 3);
// console.log(sumOfThreeNumbersResult);

// let sumOfThreeNumbersResult1 = sumOfThreeNumbers(4, 5, 6);
// console.log(sumOfThreeNumbersResult1);

// let sumOfThreeNumbersResult2 = sumOfThreeNumbers(7, 8, 9);
// console.log(sumOfThreeNumbersResult2);

// let result = sumOfThreeNumbers(sumOfThreeNumbersResult, sumOfThreeNumbersResult1, sumOfThreeNumbersResult2);
// console.log(result);

// let result1 = sumOfThreeNumbers(2, 6, result);
// console.log(result1);

function printMessage(message) {
    console.log(message);
}

// function isUserMature (age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let isMature = isUserMature(22);
// let isMature1 = isUserMature(17);

// if(isMature) {
//     printMessage("User is over 18");
// } else {
//     printMessage("User is under 18");
// }

// if (isUserMature(22)) {
//     printMessage("User is over 18");
// } else {
//     printMessage("User is under 18");
// }

function changeToUpperCaseLetters(input) {
    if (typeof input === 'strring') {
        let allUpperCase = input.toUpperCase();
        return allUpperCase;
    } else {
        console.log("Error input");
        return input;
    }
    }

// let input = "AbcjsksikaD";
// let result = changeToUpperCaseLetters(input);
// printMessage(result);

function getInputAsNumber() {
    let screenInput = prompt("Please enter a number!");

    let parsedInput = parseInt(screenInput);

    if(!Number.isNaN(parsedInput)) {
        return parsedInput;
    }

    return 0;
}


// function getInputAsNumber() {
//     let screenInput = prompt("Please enter a number!");

//     let parsedInput = parseInt(screenInput);

//     if(Number.isNaN(parsedInput)) {
//         return 0;
//     }

//     return parsedInput;
// }


let number = getInputAsNumber();
console.log(number);
number = getInputAsNumber();
console.log(number);
number = getInputAsNumber();
console.log(number);

