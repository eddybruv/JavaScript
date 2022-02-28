//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //create a variable for the white space and underscores
  var regex = /\s+|_+/g;

  //replace lowe-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  //replace space and underscore with-
  return str.replace(regex,"-").toLowerCase();
}

spinalCase("The_Andy_Griffith_Show");