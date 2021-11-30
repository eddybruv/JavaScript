/**
 * @brief : Looping/Iterating over array elements
 */

var numbers = [45, 3, 2, 32, 5, 421, 55];

/**
 * forEach(), filter(), map(), every(), some(), find(), findIndex():
 * they are all call back functions with 3 parameters/arguments:
 *      value: element
 *      index: element position
 *      array: array itself
 */



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

/**
 * reduce():
 * runs a function on each array element to produce a single value
 * works from left-to-right in the array.
 * it doesn't reduce the original array.
 * 
 * This method takes in four arguments:
 *      total: initial value/previously returned value.
 *      value, index and array.
 * 
 * an initial value can also be passed as a function ie Array.reduce(myFn, ini_value);
 * 
 * reduceRight():
 * works similar to reduce(), only that it works from right-to-left.
 */

var sum = numbers.reduce(sumUp);

function sumUp(total, value, index, array) {
    return total + value;
}

/**
 * every():
 * check if all array values pass a test.
 * returns true/false.
 */

var allOver18 = numbers.every(over18); //returns false

function over18(value, index, array) {
    return value > 18;
};

/**
 * some():
 * check if some array values pass a test.
 * returns true/false
 */

var someOver18 = numbers.some(over18); //returns true

/**
 * indexOf() and lastIndexOf():
 * returns first and last position of a specified element in an array. 
 */

/**
 * find():
 * returns the value of the first array element that passes a test function
 * 
 * findIndex():
 * returns the index of the first element that passes a test function
 */