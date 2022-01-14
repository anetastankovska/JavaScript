let operators = document.getElementsByClassName("operator");
let resultDisplay = document.getElementById("result");
let memoryDisplay = document.getElementById("memory");
let digits = document.querySelectorAll("digit");
let numOne = document.getElementById("one");

// for (let digit = 0; digit < digits.length; digit++) {

//     console.log(digit.value);
// }


// digits.forEach(digit => {
//     digits.addEventListener('click', () => {
//             let digitsValue = digit.value;
//             memoryDisplay.innerHTML = digitsValue;
//         })
// })


numOne.addEventListener('click', () => {
    let digitsValue = numOne.innerText;
    digitsValue = parseInt(digitsValue);
    memoryDisplay.innerHTML = digitsValue;
})


console.log(numOne.value)




// function evalNum (equation) {
//     let newArr = [];
//     for (let element = 0; element < array.length; element++) {
//         if (array[element] === "+" || array[element] === "-" || array[element] === "*" || array[element] === "/") {
//             newArr.push(array[element-1]);
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }
