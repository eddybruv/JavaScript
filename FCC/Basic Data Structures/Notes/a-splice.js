/**
 * we can also use splice() to add elements to an array
 * Well, you can use the third parameter, comprised of one or more element(s), to add to the array.
 */

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
