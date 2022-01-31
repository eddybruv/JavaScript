/**
 * Reverse a given string
 */
function reverseString(str) {
  let newStr = "";
  str = [...str];
  for (let i = str.length - 1; i >= 0; i--) 
    newStr += str[i];
  
    return newStr;
}

//pass string here
console.log(reverseString("hello"));
