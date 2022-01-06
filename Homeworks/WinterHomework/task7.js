// Create a function to multiply all values in an array by the amount of values in that array.

function multiplyByLength (array) {
    for (let i = 0; i < array.length; i++) {
        let newElement = array[i] * array.length;
        array[i] = newElement;
    }
    // console.log(array);
    return array;
}

let testArray = [2, 4, 6, 8, 10, 0]
let test = multiplyByLength(testArray);
console.log(test);

let testArray1 = ["foo", 2, 4, 6, 8, 10, 0, Infinity]
let test1 = multiplyByLength(testArray1);
console.log(test1);