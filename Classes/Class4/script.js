function calculateLoan(amount, months, interest, name) {
    console.log(`Amount: ${amount}`);
    console.log(`Months: ${months}`);
    console.log(`Interest: ${interest}`);
    console.log(`Name: ${name}`);
}

// // correct call
// console.log("Correct")
// calculateLoan(1000, 12, 7, "John Doe");

// console.log("Extra parameters");
// calculateLoan(1000, 12, 7, "John Doe", 1, "Trajan");

// console.log("Missing parameters");
// calculateLoan(1000, 12);

// function makeRequest (url, timeout = 2000, callback = "Calling function") {
//     console.log(`Url: ${url}`);
//     console.log(`Timeout: ${timeout}`);
//     console.log(`Callback: ${callback}`)
// }

// makeRequest("www.google.com");
// makeRequest("www.google.com", 100);
// makeRequest("www.google.com", 1500, "Hello world");

// let number = Number("12345");
// let text = String(12345);
// let num1 = Number("aaaa"); // NaN, type - number

// Global scope

let aInGlobal = 10;
// var sum;

function localScope () {
    //We are using an global variable
    console.log(aInGlobal);
    let aInLocal = 15;
}

// console.log(aInLocal)

function localScope2() {
    console.log(aInGlobal);
    // sum will be defined in the global scope using var
    sum = 2 + 3;
}

// console.log(sum);


// function one () {
//     function two () {
//         function three () {
            
//         }
//     }
// }

let firstName = "Nikola";
let lastName = "Dalcheski"

function changeName () {
    // changing globar variables 
    firstName = "Bob";
    lastName = "Bobski";
    // defining local variables are not changing global variables
    let firstName = "Bob";
    let lastName = "Bobski";
}


function printName(fName, lName) {
    console.log("Hello from " + fName + " " + lName);
}

printName(firstName, lastName);

// this is variable declared on global level
let message = "Outside the function";
function warning(message) { // message is declared as parameter in the function is not the same with the variable defined inside the function
    console.log(message);
}

warning("Inside the function");
console.log(message);