/**
 * @brief : Using Objects for Lookups
 */

// Setup
function phoneticLookup(val) {
  let result = "";

const lookUp = {
  alpha: "Adams",
  bravo: "Boston", 
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
  "": undefined
}

  result = lookUp[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");