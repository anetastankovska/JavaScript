let i = 0;

while (i < 10) {
    i++;
}

//  counter; expression; increment
for (let i = 0; i < 10; i++) {
    console.log(i);
}


let sum = 0;
for (let j = 0; j < 100; j +=2) {
    console.log(j);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// from 0 to end
for (let index = 0; index < numbers.length; index+=1) {
    let element = numbers[index];
    console.log(`Element of index ${index} nas value of ${element}`);
}

console.log ("-----------------------------------")

// from end to 0
for (let index = numbers.length - 1; index >= 0; index-=1) {
    let element = numbers[index];
    console.log(`Element of index ${index} nas value of ${element}`);
}

