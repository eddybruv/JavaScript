/**
 * @brief : Write a recursive function that returns the sum of the first n elements of an array
 */

function sum(arr, n) {
  if(n <= 0)
    return 0;
  else 
    return sum(arr, n-1) + arr[n-1];
}