function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return first.concat(second);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//we can also use concat instead of push to add elements to the end of an array
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);