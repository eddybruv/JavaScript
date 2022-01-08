/**
 * @brief : Using the hyphen to match a range of numbers and alphabets
 */

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);