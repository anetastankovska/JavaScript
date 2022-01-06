// Write a function to reverse an array.

function reverse (array) {
    let newArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    // console.log(newArray);
    return newArray;
}

function reverseNew (array) {
    let newArray = array.reverse();
    return newArray;
}

let test = reverse([1, 2, 3, 4, 5]);
console.log(test);

let test1 = reverseNew ([3, 4, 5, 6, 7]);
console.log(test1);

