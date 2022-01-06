/* Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1. */

function getElementOfIndex (array, element) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

let test = getElementOfIndex(["a", "b", "c", "d", "e", "f"], 5);
console.log(test);

let test1 = getElementOfIndex([1, 2, 3, 4, 5, 6], 4);
console.log(test1);

let testArray = [2, 5, 11, "a", "foo"];
console.log(testArray.indexOf(11));