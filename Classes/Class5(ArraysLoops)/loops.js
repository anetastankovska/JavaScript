let result = 0;

// result = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + ... + 100;

// let start = 0;
// let end = 10;

// while (start <= end) {
//     result += start;
//     start +=1;
// }

// console.log("End result: " + result);

// step 1
/* 
    end = 100;
    start = 0;
    start <= end => 0 => true
    result = result + start; => 0
    start = start + 1;
*/

// step 2
/* 
    end = 100;
    start = 1;
    start <= end => 1 => true
    result = result + start; => 1
    start = start + 1; => 2 
*/

// step 100
/* 
    end = 100;
    start = 100;
    start <= end => 100 => true
    result = result + start; => large number
    start = start + 1; => 101
*/

// step 101
/* 
    end = 100;
    start = 101;
    start > end => 101 => false // the loop will not execute
    will exit the loop
*/

// while (expression) {

//     // this will be executed until expression is evalueted as false
// }


// result1 = 0; //result must be defined outside the loop 
// let counter = 0;
// while (counter < 5) {
//     // let result1 = 0; // the result will always be 100 because the variable is declared inside the loop
//     result += 100;
//     counter +=1;
// }

// let numbers = [1, 2, 3, 12, 32, 342, 4234, 12312, 4342, 34324];
// let counter1 = 0;

// while (counter1 < numbers.length) {
//     let element = numbers[counter1];
//     console.log(`Element on index ${counter1} has value ${element}`);
//     counter +=1;
// }

let numbersArr= [];

//we want to fill the array with ten values

let i = 0;
while (i < 10) {
    // get number from screen
    let input = parseInt(prompt("Please enter a number"));
    // add value to numberArr
    numbersArr.push(input);
    // increase i
    i +=1;
}

// we want to determine which is the largest value
// max value at start is the first number in the array 
let max = numbersArr[0];
// we set i to 1 cus the first number of the array is currently the largest value and we don't need to check again
i = 0;
while (i < numbersArr.length) {
    let element = numbersArr[i];
    if (max < element) {
        max = element;
    }
    i += 1;
}

console.log(numbersArr);
console.log("Max value is " + max);