/**
 * the spread operator is simply '...'
 * we use spread operator to copy arrays.
 * we can copy an array into any position of another array
 */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

console.log(thatArray);