/**
 * A lazy match finds the smallest possible part 
 * of the string that satisfies the regex pattern.
 *
 * eg:
 * /t[a-z]*?i/ to the string "titanic" would match 
 * ["ti"] not ["titani"] as the case of greedy match
 * 
 * NOTE: Parsing HTML with regular expressions should be
 * avoided but pattern matching with HTML string with regular
 * expressions is completely fine.
 */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;  
let result = text.match(myRegex);
console.log(result[0]);