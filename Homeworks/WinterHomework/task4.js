// Write a function to check if an array contains a particular number.

// Using the includes() method
function checkForElement (array, element) {
    let allElements = array.join(" ");
    if (allElements.includes(element)) {
        return true;
    } else {
        return false;
    }
}

// if we want to make it case insensitive we can use toLowerCase method
function checkForElementNew (array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === element.toLowerCase()) { 
            return true;
        } else {
            return false;
        }
    }
}

// If we know that we will only be checking for strings, we can parse all elements to strings, so that it will treat 100 and "100" the same
function checkForElementStrings (array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].parseInt === element.parseInt) { 
            return true;
        } else {
            return false;
        }
    }
}

// using the includes() method (the method is case sensitive)
let testArray = ["Aneta", "Foo", "let", 100];
console.log(testArray.includes("Let"));

let test = checkForElement(["Aneta", "Foo", "let", 100], "Aneta");
console.log(test);

let test1 = checkForElementNew(["Aneta", "Foo", "let", 100], "aneta");
console.log(test1);

let test2 = checkForElementStrings(["Aneta", "Foo", "let", 100], "100"); 
console.log(test2);