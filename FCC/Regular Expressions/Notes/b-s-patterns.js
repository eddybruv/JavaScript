/**
 * Outside of a character set, the caret (^) is used to search for patterns at the
 * beginning of strings
 */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; //returns true
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //returns false
