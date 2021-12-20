function printMessage(message) {
    console.log(message);
}

function sumNumbers (num1, num2) {
    let result = num1 + num2;
    return result;
}

let myResult1 = sumNumbers(4, 2);
console.log(myResult1);

function subtractNumbers (num1, num2) {
    let result = num1 - num2;
    return result;
}

let myResult2 = subtractNumbers(4, 2);
console.log(myResult2);

function multiplyNumbers (num1, num2) {
    let result = num1 * num2;
    return result;
    
}

let myResult3 = multiplyNumbers(4, 2);
console.log(myResult3);

function divideNumbers (num1, num2) {
    let result = num1 / num2;
    if (num2 === 0) {
        printMessage("You can not divide by zero");
    } else {
        return result;
    }
}

let myResult4 = divideNumbers(4, 2);
console.log(myResult4);