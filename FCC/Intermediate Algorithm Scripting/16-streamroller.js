// Flatten a nested array. You must account for varying levels of nesting.

function streamrollArray(arr) {
  const flattenedArray = [];
  //loop over array contents 
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //and push into flattenedArray
      flattenedArray.push(...streamrollArray(arr[i]));
    } else {
      //copy constents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);