let numbersArray = [5, 17, 93, 76, 3, 29];

let firstDiv = document.getElementById("mainDiv").firstElementChild;
let secondP = document.getElementById("mainDiv").lastElementChild;

function printArrayElements (array, element) {
    let sum = 0;
    element.innerHTML = "";
    element.innerHTML += "<ul>"
    for (i = 0; i < array.length; i++){
        sum += array[i];
        element.innerHTML += `<li>${array[i]}</li>`;
    }
    element.innerHTML += "</ul>";
    return sum;
}

let changedFirstDiv = printArrayElements (numbersArray, firstDiv);

secondP.innerHTML = `${numbersArray.join(" + ")} = ${changedFirstDiv}`;