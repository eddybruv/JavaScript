/**
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

/**
 * Explanation:
 * (?=\w{6,})       --> checks that the word is at leaast 6 characters
 * (?=\w*\d{2})     --> checks for two consecutive digits
 */