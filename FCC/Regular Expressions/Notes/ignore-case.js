/**
 * @brief : You can match both cases using what is called a flag. 
 * There are other flags but here you'll focus on the flag that ignores case - the i flag. 
 * You can use it by appending it to the regex.
 */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);