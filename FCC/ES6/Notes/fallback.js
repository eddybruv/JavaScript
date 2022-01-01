/**
 * @brief : 
 * Create an Export fallback with export default.
 * @syntax : export default.
 * Used if only one value if being exported from a file. 
 * It is also used to create a fallback value for a file or a module.
 */

//named function
export default function add (x, y){
    return x + y;
}

//anonymous function
export default function (x, y){
    return x + y;
}