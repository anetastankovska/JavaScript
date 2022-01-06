// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countDown (number) {
    let array = []
    for (let i = number; i >= 0; i--) {
        array.push(i);
    }
    return array;
}

let test = countDown(5);
console.log(test);

let test1 = countDown(-5);
console.log(test1);