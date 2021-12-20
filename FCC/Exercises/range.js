/**
 * @brief : Use recursion to create a range of numbers
 */

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum)
    return [];
  if(startNum <= endNum)  {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
};

console.log(rangeOfNumbers(4, 9));