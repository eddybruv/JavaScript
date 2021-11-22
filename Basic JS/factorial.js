/**
 * @brief : Program that calculates the factorial of a number.
 * @param num. 
 * @returns factorial.
 */

//remember not to try and define the variable as a fxn param
function factorial(num) {
    if (num === 1 || num === 0)
        return num;
    return num * factorial(num - 1);
}

var num = 3;
console.log(factorial(num));