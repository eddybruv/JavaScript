/**
 * @brief : 
 * JavaScript has multiple ways to use regexes. 
 * One way to test a regex is using the .test() method. 
 * The .test() method takes the regex, 
 * applies it to a string (which is placed inside the parentheses), 
 * and returns true or false if your pattern finds something or not.
 */

let testStr = "Hello world!";
let testRegex = /Hello/;
console.log((testRegex.test(testStr)));
