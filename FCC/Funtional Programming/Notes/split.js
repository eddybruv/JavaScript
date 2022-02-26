function splitify(str) {
  // Only change code below this line
  let strArr = str.split(/\W/); //match any non-word character and use as delimiter
  console.log(strArr);
  return strArr;
  // Only change code above this line
}

splitify("Hello World,I-am code");
