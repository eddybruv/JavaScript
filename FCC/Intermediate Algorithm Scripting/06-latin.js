function translatePigLatin(str) {
  let strArr = str.split("");

  //function to check if a character is a vowel
  function isVowel(c) {
    return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
  }

  //if condition for words without any vowel
  if(!strArr.some(function(c) {
    return isVowel(c);
  })) {
    return strArr.concat(['a', 'y']).join('');
  }

  //if condition to check if a word contains a consonant as its first character
  if(!isVowel(strArr[0])){
    return vowel(strArr);
  } else {
    //condition for vowel
    return str.split("").concat(['w', 'a', 'y']).join('');
  }

  //function called when we have a consonant as first character
  function vowel(vow) {
    let x;
    let consCluster = [];
    for (x = 0; !isVowel(vow[x]); x++) {
      consCluster.push(vow[x]);
    }
    vow.splice(0, x);
    vow = vow.concat(consCluster).concat(['a', 'y']).join('');
    return vow;
  };
}

console.log(translatePigLatin("paragraphs"));
