                
const zeroToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const twentyToNinety = [null, null, "twenty","thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const parts = ["", " thousand", " milion", " bilion", " trilion"]

let number = document.getElementById("typeNumber");
// let submitNumber = document.getElementById("submitNumber");
// let displayResult = document.getElementById("displayresult");


function printHundreds (number) {
    let result = "";
    let hundreds;
    let pronounceHundreds;
    let pronounceTens;
    let pronunceOnes;
    hundreds = parseInt(number / 100);
    if (number === 0) {
        return result;
    } else {
        // console.log("Handling hundreds")
        if (hundreds > 0) {
        pronounceHundreds = zeroToNineteen[hundreds];
        result += pronounceHundreds + " hundred ";
        }
    }
    number = number % 100;
    if (number === 0) {
        // console.log("Handling zero tens")
        return result;
    }
    if (number < 20) {
        // console.log("Handling tens < 20")
        pronounceTens = zeroToNineteen[number];
        result += pronounceTens;
        return result;
    } else {
        // console.log("Handling tens >=20")
        let divisor = parseInt(number / 10);
        pronounceTens = twentyToNinety[divisor];
        result += pronounceTens;
    }
    number = number % 10;
    if (number > 0) {
        // console.log("Handling ones")
        pronunceOnes = zeroToNineteen[number];
        result += ` ${pronunceOnes}`;
    }
    // console.log(result);
    return result;
}


function pronounceNumber (number) {
    console.log("Pronouncing "+ number)
    let temp = number % 1000;
    let iterCounter = 0;
    let result = [];
    if (number === 0) {
        return "Zero";
    }
    while (number > 0) {
        if (temp > 0) {

            let a = printHundreds(temp) + parts[iterCounter];
            result.unshift(a);
        }
            iterCounter +=1;
            number = parseInt(number / 1000);
            temp = number % 1000;
    }
    result = result.join(" ").replace("  ", " ");
    let finalResult = result.split("");
    finalResult[0] = finalResult[0].toUpperCase();
    finalResult = finalResult.join("")
    return finalResult;
}


function displayNumber () {
    let input = document.getElementById("typeNumber");
    let parsedInput = parseInt(input.value);
    document.getElementById("displayResult").innerHTML = pronounceNumber(parsedInput);

}


