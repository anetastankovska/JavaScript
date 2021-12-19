// // if the answer is yes it will continue on 3rd line
// if (statement) {
//     statement;
// }
// //if the answer is false it will continue on line 5

// let score = 90;

// if (score > 100) {
//     alert("You won!");
// }

// // else 

// if (score < 100) {
//     alert("The score is less than 100");
// }
// else {
//     console.log();
// }





// let correctAnswers = 3;
// let correctValue = 31;

// console.log("CORRECT ANSWERS: ", correctAnswers);

// if (correctValue === 31) { // 31 === 31 => true
//     correctAnswers +=1; // if true
//     alert("Correct Answer"); // if true
// }
// else {
//     alert("wrong answer");
// }

// if (correctValue === 32) { // 31 === 31 => true
//     correctAnswers +=1; // if true
//     alert("Correct Answer"); // if true
// }
// else {
//     alert("wrong answer");
// }

// console.log("CORRECT ANSWERS: ", correctAnswers);





let input = prompt("How much cash do you have");  // We get the input from screen as a string

let parsedInput = parseInt(input);  // try to parse the input to a number
let parsedFloat = parseFloat(input);

console.log(parsedInput);
console.log(parsedFloat);

if (!Number.isNaN(parsedInput)) { //we check if the number is not NaN
    if (input >= 50) {
        alert("You should go to dinner and a movie");
    } else if (input >= 35) {
        alert("You should go out to a fine meal");
    } else if (input >= 12) {
        alert("You should go see a movie");
    } else {
        alert("Looks like you'll be watching tv");
    }
    
} else { // if the input is NaN
    alert("Please enter a valid number")
}



// if (fridayCash > 10) {

// } else if (fridayCash < 10) {
    
// }

// console.log("===========================================");

// let input = prompt("How much cash do you have");

// console.log(input);
// console.log(typeof input);