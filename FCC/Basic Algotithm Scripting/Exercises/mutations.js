/**
 * Return true if the first element of the array contains 
 * all the letters of the string in the second element
 */

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();

  for (let i = 0; i < target.length; i++) {
    if (test.indexOf(target[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
