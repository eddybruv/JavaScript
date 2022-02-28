// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//link to fcc solution: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083

function sumAll(arr) {
  let sum = 0;
  if (arr[1] < arr[0]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    console.log(arr);
    sumAll(arr);
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);