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
console.log((123).toString()); //returns "123" as a string