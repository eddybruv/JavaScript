function frankenSplice2(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

//OR

function frankenSplice(arr1, arr2, n) {
  let finalArray = arr2.slice();

  for (let i = arr1.length - 1; i >= 0; i--) {
    finalArray.splice(n, 0, arr1[i]);
  }

  return finalArray;
}

frankenSplice([1, 2, 3], [4, 5], 1);

/**
 * Explanation:
 * Create a copy of the 2nd array using the slice method
 * loop through the 1st array, for each element, splice it into
 * the copy of the array you created
 */
