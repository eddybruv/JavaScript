function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Explanation:
 * split('')    --> splits the string by each and returns an array
 * reverse()    --> takes an array of characters and reverses them.
 * join('')     --> puts the characters back together into a string
 */

console.log(reverseString("hello"))