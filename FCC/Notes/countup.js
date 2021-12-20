/**
 * @brief : Using recursion to create a countup
 */

function countup(n){
    if(n < 1)
        return [];
    else {
        const countarr = countup(n - 1);
        countarr.push(n);
        //use .unshift(n) to countdown
        return countarr;
    }
}

console.log(countup(5));