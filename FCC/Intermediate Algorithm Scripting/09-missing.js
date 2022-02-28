// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let beginIndex = alphabet.indexOf(str[0]);
  let lastIndex = alphabet.indexOf(str[str.length - 1])
  for(let i = 0; i <= lastIndex ;i++, beginIndex++)
    if(str[i] !== alphabet[beginIndex])
      return alphabet[beginIndex];

  return undefined;
}

console.log(fearNotLetter("stvwx"));
