/**
 * The closest character class in JavaScript to match the alphabet is \w. 
 * This shortcut is equal to [A-Za-z0-9_]. 
 * This character class matches upper and lowercase letters plus numbers. 
 * Note, this character class also includes the underscore character (_).
 * 
 * You can search for the opposite of \w with \W.
 * 
 * The shortcut to look for digit characters is \d, with a lowercase d. 
 * This is equal to the character class [0-9], 
 * which looks for a single character of any number between zero and nine.
 * 
 * The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
 * which looks for a single character that is not a number between zero and nine.
 */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
//all will return true

//Use the shorthand character class \w to count the number of alphanumeric 
//characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; 
let result = quoteSample.match(alphabetRegexV2).length;