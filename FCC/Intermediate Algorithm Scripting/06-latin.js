function translatePigLatin(str) {
  let strArr = str.split("");

  if(!strArr.some(function(c) {
    return isVowel(c);
  })) {
    return strArr.concat(['a', 'y']).join('');
  }
  
  function isVowel(c) {
    return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
  }

  if(!isVowel(strArr[0])){
    return vowel(strArr);
  } else {
    return str.split("").concat(['w', 'a', 'y']).join('');
  }
    


  function consonant(conso) {}

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
  /*
  for (var i = 0; !isVowel(strArr[i]); i++) {
    consCluster.push(strArr[i]);
  }
  strArr.splice(0, i);

  console.log(consCluster);
  console.log(strArr);
  */
  // return str;
}

console.log(translatePigLatin("glove"));
