function loopNumbers (number) {
    let result = [];
    for (let num = 0; num <= number; num++) {
        result.push(num);
        if (num % 2 === 0) {
            result.push("\n");
        } else {
            result.push(" ");
        }
    }
    result = result.join("")
    console.log(result);
    return result;
}

let countNumbers = loopNumbers(23);