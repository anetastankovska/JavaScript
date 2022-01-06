/* Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them). */

// Solution with finding max value and comparing to the jump value
function hurdleJump (array, jump) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    if (jump >= max  || array.length === 0) {
        return true;
    } else {
        return false;
    }
}

// Soluton with comparing the jump to every element in the arrays
function hurdleJump1 (array, jump) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > jump) {
            return false
        } 
    }        
    return true
}

let test = hurdleJump1([4, 3, 5, 6], 7);
console.log(test);

let test1 = hurdleJump1([4, 3, 5, 6], 5);
console.log(test1);

let test2 = hurdleJump1([], 5);
console.log(test2);
