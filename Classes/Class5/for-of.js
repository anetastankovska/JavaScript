let numbers = [2, 3, 5, 6, 7, 123, 1234, 321, 98];

// we want to get every element from array one by one
for (let element of numbers) {
    console.log(`Element has value ${element}`);
}


// Break 

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let element of numbers1) {
    if (element === 17) {
        console.log("Breaking loop");
        break;
    }
    console.log(element);
}

// Continue will skip the part of the code in the body but will not break the loop
for (let element of numbers1) {
    if (element % 2 === 0) {
        console.log("Skipping rest of the code");
        continue;
    }
    console.log(element);
    console.log(Math.pow(element, 2));
    // lots of code
}