/**
 * Return an array consisting of the largest number from each provided sub-array
 */

function largestOfFour(arr) {
  let newArr = [];
  for(let i = 0; i < 4; i++){
    let max = arr[i][0];
    for(let j = 0; j < arr[i].length;j++){
      
      if(arr[i][j] > max)
        max = arr[i][j];
    }
    newArr.push(max);
  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))