$(document).ready(function () {
    console.log("READY");
});

let inputs = $(".input"); 
let sum = 0;
let average = 0;
let calculateBtn = $("#calculate");

calculateBtn.click(function(){
    for (let i = 0; i < inputs.length; i++) {
        sum += parseInt((inputs[i]).value);
    }
    let average = (sum/inputs.length);
    if (average >= 10) {
        $("#result").text(average).css('color', 'green');
    } else if (average < 10) {
        $("#result").text(average).css('color', 'red');

    }
});

