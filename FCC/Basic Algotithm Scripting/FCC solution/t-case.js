/**
 * Return the provided string with the first letter of each 
 * word capitalized. Make sure the rest of the word is in lower case.
 */

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase("hey im single"));

/**
 * We are making entire string lowercase and then converting it into array. 
 * Then we are using map function to replace the lowercase character with uppercase. 
 * Finally, we are returning the string using join method.
 */