
let inputName = document.getElementById("name");
let clickButton = document.getElementById("greetName");
let displayGreet = document.getElementById("result");


function greetName (greetMessage, element) {
    element.innerHTML = greetMessage;
}


clickButton.addEventListener('click', function () {
    let nameValue = inputName.value;
    let result = "Hello " + nameValue;
    greetName(result, displayGreet);
});