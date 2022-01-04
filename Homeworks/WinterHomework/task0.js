// Create a function that takes an number and creates array with all numbers till that number.
function countUp (number) {
    let arrayOfNumbers = [];
    for (let num = 1; num <= number; num++) {
        arrayOfNumbers.push(num);
    }
    console.log(arrayOfNumbers);
    // console.log(...arrayOfNumbers);
    // console.log(arrayOfNumbers.join(","));
    return arrayOfNumbers;
}

let test = countUp(7);
