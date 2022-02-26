function alphabeticalOrder(arr) {
  // Only change code below this line
  arr.sort(function (a, b) {
    return a === b ? 1 : a > b;
  });
  console.log(arr);
  return arr;
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
