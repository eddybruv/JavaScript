var x = "100";
var y = "10";
console.log(x / y); //gives 10
console.log(x * y); //gives 1000
console.log(x - y); //gives 90
console.log(x + y); //gives 10010(string) 

var x = 100 / "Apple"; //x will be NaN (not a number)
isNaN(x); //will return true

var x = 2;
while (x != Infinity) {
    x *= x;
}
console.log(x);

x = 123;
x.toString();
console.log(x);
console.log((123).toString() + "\n"); //returns "123" as a string

/**
 * toExponential() method
 * returns a string with a number written using exponential notation.
 **/

x = 9.656;
x.toExponential(2); // returns 9.66e+0
x.toExponential(4); //returns 9.6560e+0


/**
 * toFixed() method
 * returns a string with the number written with a specified number of decimals
 */

x = 9.656;
x.toFixed(5); //returns 9.65600
//toFixed(2) is perfect when working with money


/**
 * toPrecision()
 * returns a string with a number written with a specified length
 */
x = 9.656;
x.toPrecision(5); //returns 9.6560

/**
 * Number()
 * Can be used to convert javascript variables to numbers
 */

Number(true); //returns 1
Number(false); //returns 0
Number("10"); //returns 10
Number("10.33"); //returns 10.33
Number("John"); //returns NaN
//Number() can also convert a date to a number
Number(new Date("2021-11-24")); //returns 1637712000000 (milliseconds since 1.1.1970)

/**
 * parseInt()
 * parses a string and returns a whole number. Spaces are allowed
 * only the first number is returned
 */

parseInt("4   them"); //returns 4
parseInt("10.33"); //returns 10
parseInt("Year 3"); //returns NaN