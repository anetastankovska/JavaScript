function concatenateArrayOfStrings (arr) {
    let concatenatedStrings = arr.join(" ");
    console.log(concatenatedStrings);
}

let array = ["Aneta", "Stankovska", "is", "a", "SEDC", "student"];
let myString = concatenateArrayOfStrings(array);


// Solution using loops (which is very inefficient)
function concatenateArrayOfStringsTwo (arrSecond) {
    let concatenatedStrings = "";
    for (let word of arrSecond) {
        concatenatedStrings += " ";
        concatenatedStrings += word;
    }
    console.log(concatenatedStrings.trim());
}

let arrayTwo = ["Aneta", "Stankovska", "is", "learning", "JavaScript"];
let myStringTwo = concatenateArrayOfStringsTwo (arrayTwo);