// Convert Celsius to Fahrenheit
function toFahrenheit (celsius) {
    let result = celsius * 1.8 +32;
    return result;
}

let getFahrenheit = toFahrenheit(17);
console.log(getFahrenheit);

// Convert Fahrenheit to Celsius
function toCelsius (fahrenheit) {
    let result = (5 / 9) * (fahrenheit - 32);
    return result;
}

let getCelsius = toCelsius(56);
console.log(getCelsius);

// Convert both using single function
function conversion (isCelsius, value) {
if (isCelsius == true) {
    let result = value * 1.8 + 32;
    return result;
} else {
    let result = (5 / 9) * (value - 32);
    return result;
}
}

let getConvertedValue = conversion(false, 50);
console.log(getConvertedValue);






