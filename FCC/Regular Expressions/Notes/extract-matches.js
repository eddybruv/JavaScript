/**
 * @brief : Extract Matches
 */

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

//note that the .match() syntax is the "opposite" of the .test() method
'string'.match(/regex/);
/regex/.test('string');