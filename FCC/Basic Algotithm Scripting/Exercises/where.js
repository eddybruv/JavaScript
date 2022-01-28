/**
 * Return the lowest index at which a value should be inserted into an array
 * once it has been sorted. The return value should be a number
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));