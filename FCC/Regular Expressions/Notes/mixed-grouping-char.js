/**
 * Sometimes we want to check for groups of characters using a Regular Expression 
 * and to achieve that we use parentheses ().
 * If you want to find either Penguin or Pumpkin in a string, 
 * you can use the following Regular Expression: /P(engu|umpk)in/g
*/

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
