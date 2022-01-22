// let playerName = "Trajan";
// let playerScore = 1000;
// let playerRank = 34;
// let playerAge = 33;
// let playerActivity = false;

// let playerTwoName = "Nikola";
// let playerTwoScore = 1500;
// let playerTwoRank = 3;
// let playerTwoAge = 22;
// let playerTwoActivity = true;


// let playerOne = new Object();
// playerOne.playerName = "Trajan";
// playerOne.score = 1000;
// playerOne.rank = 34;
// playerOne.age = 33;
// playerOne.isActive = false;

// let playerTwo = new Object;
// let playerTwo = new Object();
// playerTwo.playerName = "Nikola";
// playerTwo.score = 1500;
// playerTwo.rank = 3;
// playerTwo.age = 22;
// playerTwo.isActive = true;

// console.log(playerOne);
// console.log(playerTwo);


// literal notation
let hotel = {
//  key : value -- colon
    name: "Quau",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

// .notation
console.log(hotel.name);

//square bracket syntax
console.log(hotel['name'])


for (let room of hotel.roomTypes) {
    console.log(room);
}

function show (propertyName) {
    console.log(hotel[propertyName]);
}

show('name');
show('rooms');
show('roomTypes');


let person = {
    firstName: "Aneta",
    lastName: "Stankovska",
    studentAtSedc: true,
    age: 30,
    hairColor: "brown",
    birthPlace: "Skopje",
    education: ['BSc', 'MSc']
}

// delete person.birthPlace;
console.log(person);

person.firstName = "Bob";
person.lastName = "Bobsky";
person.age = 35;
person.hairColor = "blonde";
person.birthPlace = "Ohrid";
person.education = "BSc";

// person["firstName"] = "Bob";
// person["lastName"] = "Bobsky";
// person["age"] = 35;
// person["hairColor"] = "blonde";
// person["birthPlace"] = "Ohrid";
// person["education"] = "BSc"

console.log(person);

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}

delete trainer.lecture;

trainer.age = 30;

// Inside the object
function geteFullName () {
    return `${trainer.name} ${trainer.lastName}`
}



// In a separate function
// function getFullName (obj) {
//     let name = obj.name;
//     let lastName = obj.lastName;
//     console.log(`${name} ${lastName}`);
// }

// getFullName(trainer);

function Person (name, dob, job) {
    this.nae = name;
    this.yearOfBirth = dob;
    this.job = job;

    this.calculateAge = function () {
        let currentYear = new Date ().getFullYear();
        return currentYear - this.yearOfBirth
    }

    this.getNameWithTitle = function () {
        return `Mr. ${this.name}`;
    }

    this.greet = function() {
        return `Hello ${this.name}, how are you?`;
    }
}


let trajan = new Person("Trajan", 1987, "Trainer");
let nikola = new Person ("Nikola", 1988, "Assistant");

console.log(trajan);
console.log(nikola);

console.log(trajan.calculateAge());
console.log(nikola.calculateAge());

let bob = new Person("Bob", 1999, "Support");


window.sayHello = function () {
    console.log(this);
}

function sayHello1 () {
    console.log(this);
}

sayHello();
sayHello1();

function Car (name) {
    this.name = name;

    this.getCarName = function () {
        console.log(this);
    }
}

// let car = new Car ("Mazda");

// car.getCarName();
// car.sayHello = sayHello1;

// car.sayHello();


// let p3 = {
//     name = "",
//     lastName = "",
//     age = "",
    
//     calculateAge: function () {
//         return "";
//     }
// }

function Car (model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;

    this.calculateFuelConsumption = function (km) {
        totalConsumption = this.fuelConsumption * km;
        console.log(totalConsumption);
        return totalConsumption;
    }

}

let car1 = new Car ("Mercedez", "grey", 2020, "gasoline", 10);
car1.calculateFuelConsumption(100);
