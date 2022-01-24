/**
 * To only specify the lower number of patterns, keep the first number followed by a comma.
 */

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); //returns true
multipleA.test(A2); //returns false
multipleA.test(A100); //returns true

/**
 * To specify a certain number of patterns, just have that one number between the curly brackets.
 */

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
