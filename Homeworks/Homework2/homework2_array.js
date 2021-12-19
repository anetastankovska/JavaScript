let birthYear = prompt("Please enter your birth year to see your Chinese Zodiac Sign: ");
console.log(birthYear);

// As JavaScript allows changing types of variables I used the same variable to parse the input to save memory
birthYear = parseInt(birthYear);
console.log(typeof birthYear);

while (birthYear < 1900 || birthYear > 2021) {
    birthYear = prompt("Please enter a valid birth year between 1900 and 2021: ");
    console.log(birthYear);
    birthYear = parseInt(birthYear);
}

let chineseZodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog"];

let chineseZodiac = (birthYear - 4) % 12;
alert(`Your Chinese Zoidiac Sign is ${chineseZodiacSigns[chineseZodiac]}` );





