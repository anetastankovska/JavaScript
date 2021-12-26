function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    console.log(`You are ${age} years old.`);
}
 calculateAge(1991, 2021);
 calculateAge(1981, 2021);
 calculateAge(2001, 2021);

// Bonus
 function calculateAge1(birthYear) {
    let currentDate = new Date();
    let currentyear = currentDate.getFullYear();
    let age = currentyear - birthYear;
    console.log(`You are ${age} years old.`);
}

calculateAge1(1991);