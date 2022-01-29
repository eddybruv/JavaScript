/**
 * check if a string ends with the given target string
 */

function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;
  let checkLength = str.length - target.length;

  for(let i = checkLength, j = 0; i < strLength; i++,j++){
    if(str[i] !== target[j])
      return false;
  }
  return true;
}

console.log(confirmEnding("Bastian", "n"));