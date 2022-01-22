function sayHello () {
    let a = 3;
    let b = 5;
    let result = a + b;
    console.log(result);
    alert("Hello, you just raised and handled an event")
}

let counter = 0;
function printMessageInConsole() {
    counter += 1;
    console.log(`Counter is: ${counter}`);
}

let element = document.getElementById("btn-traditional");
// element.onclick = printMessageInConsole;

element.onclick = function () {
    console.log("I have been clicked")
}

function sayHello () {
    console.log("Hello")
}
element.onclick = sayHello;

function iWon () {
    console.log("I am the winner")
}
element.onclick = iWon;

// function abc () {
//     console.log("Hello world")
// }

let divElement = document.getElementById("someDiv");
// divElement.addEventListener("click", function () {
//     alert("Called by event listener");
// })

// function sayHello2 () {
//     alert("Hello from addEventListener");
// }

// divElement.addEventListener('click', sayHello2)
// divElement.addEventListener('mouseover', function () {
//     console.log("Say hello on mouseover")
// });

// divElement.addEventListener('click', function (event) {
//     console.log(event);
// })

// let inputElement = document.getElementById('username');
// inputElement.addEventListener('blur', function (event) {
//     console.log(event.target.value);
// });

// inputElement.addEventListener('keydown', function(event) {
//     console.log(event.target.value);
// });

// let elem = document.getElementById("redDiv");
// function setColorToDiv (event) {
//     console.log(event.target.value)
// }

// elem.addEventListener('mouseover', setColorToDiv);
// elem.removeEventListener('mouseover', setColorToDiv);

// function greet (name) {
//     alert(`Hello ${name}`);
// }

// function sum (num1, num2) {
//     return num1 + num2;
// }

// document.getElementById('greet').addEventListener('click', function () {
//     greet("Aneta");
//     let result = sum(5, 5);
//     console.log(result);
// }) 
    

function printResult (message, element) {
    element.innerHTML = '';
    element.innerHTML = message;
}
let inputOne = document.getElementById("number-1");
let inputTwo = document.getElementById("number-2");
let calculateBtn = document.getElementById("calculate");
let resultDiv = document.getElementById("result");

calculateBtn.addEventListener('click', function () {
    let valueOne = inputOne.value;
    let valueTwo = inputOne.value;
    let result = valueOne + valueTwo;
    printResult (result, resultDiv)
})

// let errorDiv = document.getElementById("error");
// let emailInput = document.getElementById("email");

// emailInput.addEventListener('keyup', function (event) {
//     let value = event.target.value;
//     if (value.length <= 8) {
//         errorDiv.innerText = "Your email is not valid"
//     }
// })


