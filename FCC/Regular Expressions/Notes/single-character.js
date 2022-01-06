/**
 * @brief : 
 * You can search for a literal pattern with some flexibility with character classes.
 * Character classes allow you to define a group of characters you wish to match
 * by placing them inside square brackets
 */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);      //returns ["big"]
bagStr.match(bgRegex);      //returns ["bag"]
bugStr.match(bgRegex);      //returns ["bug"]
bogStr.match(bgRegex);      //returns null