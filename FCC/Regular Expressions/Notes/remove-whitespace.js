/**
 * Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
 */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
