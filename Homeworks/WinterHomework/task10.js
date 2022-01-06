// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

function transform (array) {
    for (let i =0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = array[i] - 1;
        } else if (array[i] % 2 != 0) {
            array[i] = array[i] +1;
        } 
    }
    return array;
}

let test = transform([2, 5, 6, 8, 11, 0, 23, 100, -999])
console.log(test);