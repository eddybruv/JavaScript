/**
 * @brief commonly used string methods
 */

//string length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("Length of txt is " + txt.length + "\n");

//finding a string in a string
var str = "Please locate where 'locate' occurs";
console.log("The first occurrence of 'locate' is at index: " + str.indexOf("locate"));
console.log("The last occurrence of 'locate' is at index: " + str.lastIndexOf("locate") + "\n");
//both methods return -1 if the string is not found

str.lastIndexOf("locate", 15); //start searching at index 15

//Extracting string parts
var slc = "Apple, Banana, Kiwi";
console.log("Result of slicing is: " + slc.slice(7, 13));
console.log("Result of substring: " + slc.substring(7, 13));
console.log("Result of substr: " + slc.substr(7, 6) + "\n");

//Replacing string content
str = "Please visit Edwin";
console.log("Before replacing: " + str);
str.replace("Edwin", "Sonia");
console.log("After replacing we get " + str + "\n");

//converting to upper and lower case
str = "Hello World!";
console.log(str);
str = str.toUpperCase();
console.log(str);
str = str.toLowerCase();
console.log(str + "\n");

//string concat method
var text = "Hello".concat(" ", "World", " And you Eddy\n");
console.log(text);

//string trim
str = "           Hello World            \n";
str = str.trim();
console.log(str);

//converting a string into an array
str = "a, b, v, c, e, e, w, r, t";
var arr = str.split(","); //split on commas
/**
 * txt.split(" ") -> split on spaces
 * txt.split("")  -> split characters
 */
console.log(arr);