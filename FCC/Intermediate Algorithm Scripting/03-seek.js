// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

/**
 * Explanation:
 * Declare a variable (valsToRemove) and set it equal to a new Array object from() 
 * the arguments passed into the function.
 * Use the slice() method on the array of arguments, starting from the second index, 1.
 * 
 * Return the filtered array, using includes() in the callback funtion to check if
 * val is not in valsToRemove; returning true to keep the value in the original 
 * array or false to remove it.
 */

function destroyer (arr) {
  let valsToRemove = Array.from(arguments).slice(1);

  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

