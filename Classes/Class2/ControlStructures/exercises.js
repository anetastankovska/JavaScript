let score = prompt("Please enter your score"); 

let parsedScore = parseInt(score);  

console.log(parsedScore);

if (!Number.isNaN(parsedScore)) { 
    if (score < 60) {
        alert("You failed the test");
    } else if (score <= 60) {
        alert("You passed the test with a grade 6");
    } else if (score <= 80) {
        alert("You passed the test with a grade 7");
    } else  if (score <= 90) {
        alert("You passed the test with a grade 8");
    } else  if (score < 100) {
        alert("You passed the test with a grade 9");
    } else if (score === 100) {
        alert ("You passed the test with a grade 10");
    } else {
        alert("Please enter a number between 0 and 100");
    }
} else { 
    alert("Please enter a valid number")
}