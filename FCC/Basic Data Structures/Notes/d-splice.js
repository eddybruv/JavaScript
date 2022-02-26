/**
 * splice() --> remove any number of consecutive elements from anywhere in an array
 * returns an array of elements removed
 */

let array = ["today", "was", "not", "so", "great"];
console.log(array.splice(2, 2));
/**
 * args:
 * first --> starting index
 * second --> number of elements to remove
 * 
 * using just one argument removes every element including that element till the end of the list/array
 */
console.log(array);