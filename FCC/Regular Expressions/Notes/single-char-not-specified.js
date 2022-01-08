/**
 * @brief : To create a negated character set, place ^ after openning [ ]
 */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou.]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);