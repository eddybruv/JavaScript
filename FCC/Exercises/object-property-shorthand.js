/**
 * @brief : Write consise oject literal declarations using object property shorthand
 */

// consider: 
const getMousePosition = (x, y) => ({
    x: x,
    y: y
})

//this can be shortened to 
const GetMousePosition = (x, y) => ({x, y});