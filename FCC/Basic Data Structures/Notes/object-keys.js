/**
 * Object.keys()    --> returns an array of all the keys in the object passed
 *                      into the function
 */

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  let keys = Object.keys(obj);
  return keys;
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
