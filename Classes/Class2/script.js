//console.log("I'm connected")
let hello = "Hello" + " " + "World"; // => Hello World
console.log(hello);

// let firstName = "Trajan";
// let lastName = "Stevkovski";

// let fullName = firstName + " " + lastName; // Trajan + + Stevkovski => Trajan Stevkovski
// console.log(fullName);

let sedc = "SEDC";
let year = 2022
//console.log("Year is of type before concatenation ");
//console.log("Typeof year");
let sedcYear = sedc + " " + year;
console.log(sedcYear);
//console.log("Year is of type after concatenation: ")
//console.log(typeof year);


let result = "2" + 4; //24
console.log(result);
let result2 = 2 + "4"; //24
let result3 = 2 - "4"; //-2
console.log(result2);
console.log(result3);

let firstName = "Trajan";
let lastName = "Stevkovski"
let age = 33;
let gender = "M";
let address = "Skopje";

// Hi I am Trajan Stevkovski I live in Skopje and I am 33 years old

// let greet = "Hi I am " + firstName + " " + lastName + " I live in " + address + " and I am " + age + "years old";
// console.log(greet);

// let greet2 = `Hi I am ${firstName} ${lastName} I live in ${address} and I am ${age} years old.`
// console.log(greet2);

let baseUrl = "www.sedc.com"
let students = "students"
let subjects = "subjects"
let courses = "courses"


// we want to get all courses 
// most common use
let courseUrl = `${baseUrl} ${courses}/basicjs/class01`

let quotes = " I'm "

console.log("===========================================================");

let a = 2/ "foo"; // => NaN
console.log(a);
console.log(typeof a);

let isNan = isNaN(a); // => true
console.log(isNan);

let b = "foo";
console.log(isNaN(b));

let isBNan = Number.isNaN(b); // b=NaN checks if b has an explicit value of NaN
console.log(isBNan);

let maxNumber = Infinity;
let minNumber = -Infinity;

// comparison

// ((score1 + score2) > (highScore1 + highScore2)) => ((result of score1 + score2) > (result of highScore1 + highScore2));
// ((1 + 2) > (3 + 4)) => 3 > 7;

// ((5 < 3) && (3 > 1)) => false && true
// (((5 +2) > (3 + 1)) && (3-1) === 2) => ((7 > 4) && 2 ===2) => true && true => true

let emptyString = "";
let IsEmptyString = emptyString === "";
