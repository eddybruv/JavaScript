/**
 * @brief : The wildcard character period(.) will match any other one character.
 * You can use the character just like any other character in the regex.
 */

let huString = "I'll hug you then hum a song";
let huRegex = /hu./g;
let result = huString.match(huRegex);
console.log(result);