/**
 * Arity of a function:
 *  Number of arguments it requires.
 * Currying a function: 
 *  means convert a function of N arity into N functions of arity 1.
 * Partial Application: 
 *  Can be described as applying a few arguments to a function at the 
 * time and returning another function that is applied to more arguments.
 */

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

// const curried = (x) => (y) => x + y;

console.log(curried(1)(2));

// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 

const funcForY = curried(1);
console.log(funcForY(2));

//Partial Application

function impartial (x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10);


function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}

add(10)(20)(30);