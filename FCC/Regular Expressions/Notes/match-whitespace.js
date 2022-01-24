/**
 * You can search for whitespace using \s, which is a lowercase s.
 * This pattern not only matches whitespace, but also carriage return, tab,
 * form feed, and new line characters. You can think of it as similar to the
 * character class [ \r\t\f\n\v].
 * 
 * Search for non-whitespace using \S, which is an uppercase s. T
 * his pattern will not match whitespace, carriage return, tab, form feed, and 
 * new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].
 */

let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);   //returns [" ", " "]
