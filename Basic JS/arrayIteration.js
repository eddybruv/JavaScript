/**
 * @brief : Looping/Iterating over array elements
 */

var numbers = [45, 3, 2, 32, 5, 421, 55];

/**
 * forEach():
 * calls a callback function once for each array element
 */
numbers.forEach(print); //prints every element int the array
function print(value, index, array) {
    console.log(value);
}

/**
 * map():
 * 
 * Creates a new array by performing a function on each array element.
 * Does not execute the function for array elements without values.
 * Does not change the original array.
 */

var numbers2 = numbers.map(mult); //multiplies every element by 2
function mult(value, index, array) {
    return value * 2;
}

/**
 * filter():
 * creates a new array with array elements that pass a test.
 */

var blw18 = numbers.filter(blw);

function blw(value, index, array) {
    return value < 18;
}