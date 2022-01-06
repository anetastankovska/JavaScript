// Solution 1: Filtering the array that contains different types of elements by creating new array that will contain only numbers
function sumMaxMin (array) {
    let newArray = [];
    for (let j = 0; j <= array.length; j++) {
        if (typeof array[j] === "number") {
            newArray.push(array[j]);
        }
    }

    let max = newArray[0];
    let min = newArray[0];
    for (let i = 0; i <= newArray.length; i++) {
        if (newArray[i] > max) {
            max = newArray[i];
        } else if (newArray[i] < min) {
            min = newArray[i];
        }
    }
    let sum = max + min;
    // console.log(sum);
    return sum;
}


// Solution 2: Working on the initial array that contains different types of elements using  tha continue expression
function sumMaxMinTwo (array) {
    let max = null;
    let min = null;
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] != "number") {
            continue;
        }
        if (max === null) {
            max = array[i];
            min = array[i];
            continue;
        }
        if (arrayTwo[i] > max) {
            max = array[i];
        } else if (array[i] < min) {
            min = array[i];
        }
    }
    let sum = max + min;
    // sconsole.log(sum);
    return sum;
}


let arayOfNumbers = ["a", 5, 14, 1, 73, 32, 9, "b", 17, ""];
let arayOfNumbersTwo = ["f", 5, 14, "e", 3, 73, 32, 9, "d", 17, ""];
let calculate = sumMaxMin(arayOfNumbers);
console.log(calculate);
let calculateTwo = sumMaxMin(arayOfNumbersTwo);
console.log(calculateTwo);