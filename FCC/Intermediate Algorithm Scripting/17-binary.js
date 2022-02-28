// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


function binaryAgent(str) {
  let binArr = str.split(" ");
  let uniStr = [];

  //using radix/base parameter, we can convert the binary 
  //number to a decimal number while simultaneously converting to a char

  for (let i = 0;i < binArr.length; i++){
    uniStr.push(String.fromCharCode(parseInt(binArr[i], 2)));
  }
  console.log(uniStr.join(''))
  return uniStr.join('');
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);