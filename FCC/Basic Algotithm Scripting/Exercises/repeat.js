/** 
  * Return a string containing a repeated string n(num) times
  */

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
