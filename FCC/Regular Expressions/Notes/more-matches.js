/**
 * @brief : 
 * To extract a pattern more than once, you can use the -g flag
 */

let testStr = "Repeat, Repeat, Repeat, Repeat";
let ourRegex = /repeat/ig;
let result = testStr.match(ourRegex);
console.log(result);