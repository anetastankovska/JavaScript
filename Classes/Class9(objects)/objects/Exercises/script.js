let firstNameElement = document.getElementById("firstName");
let lastNameElement = document.getElementById("lastName");
let ageElement = document.getElementById("age");
let saveButton = document.getElementById("save");
let resultElement = document.getElementById("result");
let listElement = document.getElementById("list");
let students = [];

function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function displayResults (element, arrOfStudents) {
    element.innerHTML = "";
    for (let student of arrOfStudents) {
        element.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName}, 
        <b>Age:</b> ${student.age}</li>`;
    }
}

saveButton.addEventListener('click', function () {
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    
    let newStudent = new Student (firstName, lastName, age);
    students.push(newStudent);
    displayResults (listElement, students);
    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    
} )


console.log(students);


