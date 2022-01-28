/**
 * Write a function that splits an array 
 * (first argument) into groups the length of size (second argument) 
 * and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
  let deletedArray = [];
  let newArray = [];
  for (; arr.length != 0; ) {
    deletedArray = arr.splice(0, size);
    newArray.push(deletedArray);
  }
  console.log(newArray);
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);