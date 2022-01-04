function validateNumber (num) {
    if (typeof num === "number") {
        return true;
    } else {
        console.log("Error!");
        return false;
    }
}


function sumNumbers (arr) {
    let sum = 0;
    for (let num of arr) {
        if (validateNumber(num) === false) {
            return
        } else {
            sum +=num;
        }
        
    } 
    // console.log(sum);
    return sum;
}

let arrayOfNumbers = [2, 3, 4, 5, 6];
let calculateSumOfNumbers = sumNumbers(arrayOfNumbers);
console.log(calculateSumOfNumbers);
