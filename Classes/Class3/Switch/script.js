console.log("Connected");

let day = 7;
let dayInWords = "";

switch (day) {
    case 1:
        dayInWords = "Monday"
        break; // exits switch statement
    case 2:
        dayInWords = "Tuesday"
        break;
    case 3:
        dayInWords = "Wednesay"
        break;
    default:
        console.log("No day exists with that number");
        break;
}

console.log(dayInWords);

let value = "4";

switch (value) {
    case "1":
        console.log(value);
        break;
    case "2":
        console.log(value);
        break;
    case "3":
    case "4":
        console.log(value);
        //... If we want the same code to execute for both cases 3 and 4
        break;
    default:
        console.log("Default");
        console.log(value);
        break;
}

// code execution starts from here
let number = 1;

// without breaks it will execute all statements cases
switch (number) {
    case 1:
        console.log("Case 1");
        number +=1;
        // here we need break
    case 2:
        console.log("Case 2");
        number +=2;
        // here we need break
    case 3:
        console.log("Case 3");
        number +=3;
        // here we need break
    case 4:
        console.log("Case 4");
        number +=4;
        // here we need break
    default:
        console.log("We are in default");
        break;
}

console.log(number); // 1 + 1 + 2 + 3 + 4
// Always add breaks

let firstName = "Trajan";

switch (firstName) {
    case "Trajan":
        console.log("Trainer");
        break;
    case "Nikola":
        console.log("Assistant");
        break;
    default:
        console.log("Enter a valid name");
}

