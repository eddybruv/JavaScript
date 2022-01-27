/**
 * slice()    --> copies a  given number of elements to a newArray
 *                leaving the array it is called upon untouched
 */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.splice(1, 1);

/**
 * args:
 * first    --> start index
 * second   --> stop index(upto but not including)
 */

console.log(todaysWeather);