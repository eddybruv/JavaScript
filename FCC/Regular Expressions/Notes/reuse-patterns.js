/**
 * Say you want to match a word that occurs many times 
 * "row row row your boat"
 * You could use /row row row/.
 * But using capture groups can be used to find repeated substrings
 * 
 * Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. 
 * In this case, the goal is to capture a word consisting of alphanumeric characters 
 * so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
 * 
 * The substring matched by the group is saved to a temporary "variable", 
 * which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are 
 * automatically numbered by the position of their opening parentheses (left to right), starting at 1.
 * 
 * Example:
 */

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

