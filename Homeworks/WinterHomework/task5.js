// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// solving the problem by modifying the actual array
function negateNumber (array) {
    if (array === []) {
        return array
    }
    for (let num = 0; num < array.length; num++) {
        let negatedNumber = (- array[num]);
        array[num] = negatedNumber;
    }
    return array;
}

let test = negateNumber([-2, 3, -10, 4]);
console.log(test);

let test1 = negateNumber([]);
console.log(test1);

let test2 = negateNumber([-2, 3, -10, 4, "a", "b",]);
console.log(test2);


// Solving the problem by creating new array
function negateNumberNew (array) {
    if (array === []) {
        return array
    }
    let newArray = [];
    for (let num = 0; num < array.length; num++) {
        let negatedNumber = (- array[num]);
        if (isNaN(array[num])) {
            continue
        }
        newArray.push(negatedNumber);
    }
    return newArray;
}

let testNew = negateNumberNew([-2, 3, -10, 4]);
console.log(testNew);

let testNew1 = negateNumberNew([]);
console.log(testNew1);

let testNew2 = negateNumberNew([-2, 3, -10, 4, "a", "b",]);
console.log(testNew2);