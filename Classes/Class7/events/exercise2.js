let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let submitButton = document.getElementById("submit")
let displayResult = document.getElementById("resultString") 

function displayData () {
let result = `${firstName.value} ${lastName.value} ${email.value} ${password.value}`;
displayResult.innerHTML = result;
return result;
}

// submitButton.addEventListener('click', function () {
//     displayResult.innerHTML = displayData();
// })

submitButton.addEventListener('click', displayData)