// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let pairs = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };
  let strArr = str.split("");
  let htmlStr = strArr.map(function (c) {
    if (pairs.hasOwnProperty(c)) return pairs[c];
    else return c;
  });
  console.log(htmlStr.join(""));
  return htmlStr.join("");
}

convertHTML('Stuff in "quotation marks"');
