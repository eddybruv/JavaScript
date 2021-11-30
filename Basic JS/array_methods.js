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

/**
 * Splicing an array.
 * splice() method.
 * prototype: .splice(int(position to add), int(number of elements to remove), elements to add)
 * returns an array with deleted items
 */

fruits.splice(2, 0, "Grape", "Oranges");
fruits.splice(0, 1); //removes first element of the list without leaving holes.
fruits.splice(1, 2); //removes elements at index 1 & 2 in the array

/**
 * concat():
 * creates a new array by merging/concatenating existing arrays.
 * this method doesn't change the contents of the arrays
 * concat() can also take any number of arguments
 */

var myGirls = ["Cecilia", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys 

/**
 * slice():
 * slices out a piece of an array into a new array and
 * creates a new array with elements starting from the array element index => fruits.slice(3)
 * 
 * slice() can take two arguments like slice(4, 8)
 * It selects elements from the start argument and up to the end argument.
 */

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 4);