/**
 * You can search the end of strings using the dollar sign character
 * $ at the end of the regex
 */

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //returns false
