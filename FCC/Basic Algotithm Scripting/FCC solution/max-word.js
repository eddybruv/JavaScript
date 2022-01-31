//using .map()

function findLongestWordLength(str){
    return Math.max(...str.split(' ').map(word => word.length));
}

/**
 * Explanation: 
 * str.split(' ')   --> returns an array of words.
 * we then make another array made from the lengths of each
 * element of the str.split(' ') array with map()
 * then finally, we pass the array(of lengths) as an argument for the 
 * math.max function with the spread operator.
 */