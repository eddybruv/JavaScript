/**
 * @brief : ways/methods used in sorting arrays
 */




/**
 * sort():
 * sorts an array in alphabetical order
 */
var cars = ["Toyota", "Tesla", "BMW", "Ford", "Chevolet"];
cars.sort();

/**
 * reverse():
 * reverses elements in an array.
 * You can use it to sort in descending order by sorting then reversing
 */
cars.reverse();

/**
 * The compare function.
 * This is used for sorting numerical arrays
 * sort() method sorts an array alphabetically so using it on a numerical array
 * would yield wrong results.
 */

var points = [3, 6, 3, 2, 4, 343, 5, 454, 56, 75, 345, 99, 100];
points.sort(function(a, b) {
    return a - b;
});

points.sort(function(a, b) {
    return b - a; //reverse the array(descending order)       
});

//sorting an array in random order
points.sort(function(a, b) {
    return 0.5 - Math.random();
});

/**
 * Fisher Yates Method.
 * Most correct method to shuffle an array properly
 */

points = [40, 100, 1, 5, 25, 36, 10];

for (let i = points.length - 1; i > 0; i++) {
    var j = Math.floor(Math.random() * i);
    var k = points[i];
    points[i] = points[j];
    points[j] = k;
}

/**
 * Sorting Object Arrays
 * The solution is to write a compare function to compare the property values.
 */

var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

cars.sort(function(a, b) {
    return a.year - b.year;
});

console.log(cars);