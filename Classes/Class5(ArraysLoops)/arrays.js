let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let numbers1 = [1, 2, 3, 4, 5, 6, 7];
        //    0, 1, 2, 3, 4, 5, 6 --> indexes
let emptyArray = [];
let mixedValue = ["Trajan", 12, true, null, undefined, [], {}];
let authors = [ 'Ernest Hemingway',
    'Charlotte Bronte',
    'Dante Alighieri',
    'Emily Dickinson'
]; // for better readability

let numbers = [1, 2, 3, 4, 5, 6, 7];
        //    0, 1, 2, 3, 4, 5, 6 --> indexes

console.log(numbers);

console.log(numbers[2]);
console.log(numbers[5]);
console.log(numbers[0]); //reading the value
console.log(`We are getting the value of our array ${numbers} with index 3: ${numbers[3]}`);

// Setting the value of the element with index 5
numbers[5] = 10000;
// reading the value
let someVal = numbers[3];
console.log("We changed the value in the array");
console.log(numbers);

let lengthOfArray = numbers.length;
console.log("Length of numbers array: " + lengthOfArray);
let lastElement = numbers.length - 1;
let lastElement1 = numbers[numbers.length - 1]; // ==> numbers[6] when evauated 
console.log(lastElement);

// appending elements by using index (not recommended)
numbers[numbers.length] = 20; // ako sakame da dodademe uste eden element
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

// appending elements with push() method - always adds the elements to the end of the array
numbers.push(5000);
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

// appending more than one element
numbers.push(123, 321, 234, 432);
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

//appending elements at the beggining of the array 
numbers.unshift(7777);
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

numbers.unshift(7777);
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

// this will not add a new element at the beginning, but replace the element
numbers[0] = 9999;
console.log(numbers);
console.log("Length of numbers array " + numbers.length);

// removing the element from the end pf the array
numbers.pop();
// pop the element and save the value in some variable
let lasElemettWithPop = numbers.pop();
console.log("Last element: " + lasElemettWithPop);

// removing element from the beginning of the array
let firstElementWithShift = numbers.shift();
console.log("First element:" + firstElementWithShift);

