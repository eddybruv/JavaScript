/**
 * @brief : Arrow Functions and usage
 */

//arrow function to return date.
const myDate = () => {
    return new Date();
}
console.log(myDate())

//like regular functions, arrow functions can also take arguments
const mult = (a, b) => {
    return a * b;
}
console.log(mult(6, 45));

//arrow functions can also have default parameters
const salut = (name = "Edwin") => {
    return "Hello" + " " + name;
}
console.log(salut("Sonia!"));
console.log(salut());

//they can be used with rest parameters
const howMany = (...args) => {
    return args.length;
}
console.log(howMany(4, "wandas", [0929, 23, 1]));