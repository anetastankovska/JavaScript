function calculateDogYears (input) {
    let calculatedDogYears = input * 7;
    return calculatedDogYears;
}

let newInput = prompt("Please enter human years:");
let parsedHumanYears = Number.parseInt(newInput);

if (!isNaN(parsedHumanYears)) {
    let dogYears = calculateDogYears(newInput);
    console.log(dogYears);
    alert(`${parsedHumanYears} human years are equal to ${dogYears} dog years`);
} else {
    console.log("Enter a valid year!");
}
