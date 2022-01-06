/**
 * @brief : Inside a character set/object, you can define a long range
 * of characters to match using a hyphen character
 */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);      //returns ["cat"]
batStr.match(bgRegex);      //returns ["bat"]
matStr.match(bgRegex);      //returns null
