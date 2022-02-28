// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let strArr = str.split("");
  let dnaArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "A") dnaArr.push(["A", "T"]);
    else if (strArr[i] === "T") dnaArr.push(["T", "A"]);
    else if (strArr[i] === "C") dnaArr.push(["C", "G"]);
    else dnaArr.push(["G", "C"]);
  }
  console.log(dnaArr);
  return dnaArr;
}

pairElement("ATCGA");

//OR
function pairElement2 (str) {
  //create object for pair lookup
  let pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  //split string into array of characters
  let strArr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}