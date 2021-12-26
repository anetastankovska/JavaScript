let currentBalance = 10000;

function withdraw (money) {
    if (money > currentBalance) {
        alert("The requested amount is larger than your current balance. Please try again with smaller amount");
        return;
    }
    currentBalance -= money;
    console.log(`Your current balance after the transaction is ${currentBalance}`);
}

// let withdrawMoney = withdraw();


//Bonus

let newWithdraw = prompt("Please enter the amount you would like to withdraw from your account: ");
let parsedNewWithdraw = Number.parseInt(newWithdraw);

if (!isNaN(parsedNewWithdraw)) {
    withdraw(newWithdraw);
    console.log(currentBalance);
} else {
    console.log("Please enter a valid input");
}
