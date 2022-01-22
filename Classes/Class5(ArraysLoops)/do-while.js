let counter = 0;

do {
    console.log("Thie will be executed only once");
    console.log("Expression evaluates in " + counter)
} while (counter < 0);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let i = 0;
do {
    let element = numbers[i];
    console.log(`Element on index ${i} has value ${element}`);
    i+=1;
} while (i < numbers.length);