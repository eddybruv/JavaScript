/**
 * Truncate a string if it is longer than the given maximum
 * string length. 
 * Return the truncated string with the ... ending
 */

function truncateString(str, num) {
  if(num >= str.length)
    return str;
  str = str.split('');
  str.splice(num);
  str = str.join('');
  return str + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
