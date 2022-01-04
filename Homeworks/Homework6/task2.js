let numbersArray = [5, 17, 93, 76, 3, 29];

let firstDiv = document.getElementById("mainDiv").firstElementChild;
let sumOfNumbers = document.getElementById("mainDiv").lastElementChild;

function printArrayElements (array, element) {
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${array[i]}<li>`;
    }
    element.innerHTML += "</ul>";
}

let changedFirstDiv = printArrayElements (numbersArray, firstDiv);

function sumNum (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    return sum;
}

let test = sumNum(numbersArray);

function sumArrayElements (array, element) {
    element.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += array[i];
        element.innerHTML += " + ";
        if (i === array.length - 1) {
            element.innerHTML += array[i];
            element.innerHTML += " = ";
        }
    }
    let sumOfArrayNumbers = sumNum(array);
    element.innerHTML += sumOfArrayNumbers;
}

let changedLastP = sumArrayElements (numbersArray, sumOfNumbers);