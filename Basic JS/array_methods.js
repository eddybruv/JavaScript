/**
 * sort():
 * returns sorted array of elements
 */

var num = [2, 35, 6, 3, 2, 1, 5, 6];
num.sort();

/**
 * length property:
 * returns length of array(number of elements in the array)
 */
var len = num.length;

/**
 * push():
 * Easiest way to add a new element to an array(end).
 */
num.push(6);

//the length property can also be used
num[num.length] = 8;

/**
 * Array.isArray(variable_name):
 * returns true if variable is an array
 */

Array.isArray(num); //returns true

/**
 * toString():
 * returns a string of elements in the array separated by commas
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();

/**
 * join():
 * works like toString() but you can specify the separator
 */

fruits.join(" , ");

/**
 * pop():
 * removes the last element from an array
 */

fruits.pop(); //removes "mango" from the list

/**
 * push():
 * adds a new element to an array(end)
 * returns new array length
 */

fruits.push("Kiwi");

/**
 * shift() and unshift():
 * removes the first element of  the array
 * returns removed element as string.
 * unshift() does the opposite of shift()
 */