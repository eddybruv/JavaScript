/**
 * You can search and replace text in a string using .replace() on a string. 
 * The inputs for .replace() is first 
 * the regex pattern you want to search for. The second parameter is 
 * the string to replace the match or a function to do something.
 */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

//You can also access capture groups in the replacement string with $
console.log("Code Camp".replace(/(\w+)\s(\w+)/, `$2 $1`));