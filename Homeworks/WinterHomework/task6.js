// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function subtractMaxMin (array) {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else if (array[i] > max) {
            max = array[i];
        }
    }
    let result = max - min;
    console.log(`The minimum number is ${min}, and the maximum number is ${max}.`);
    console.log(`The difference between ${max} and ${min} is ${result}`);
    return result;
}


let testArrray = [2, 4, 5, 8, 12, 1];
let test = subtractMaxMin(testArrray);
console.log(test);

let testArray1 = [7, 1000, "aaa", 8, 12, 1]
let test1 = subtractMaxMin(testArray1);
console.log(test1);

let testArrayInfinity = [90, Infinity, -Infinity,1];
let testInfinity = subtractMaxMin(testArrayInfinity);
console.log(testInfinity);

let testArrayInfinity1 = [90, Infinity, -100, 1];
let testInfinity1 = subtractMaxMin(testArrayInfinity1);
console.log(testInfinity1);

let testArrayMinusInfinity = [90, -Infinity, 1];
let testMinusInfinity = subtractMaxMin(testArrayMinusInfinity);
console.log(testMinusInfinity);