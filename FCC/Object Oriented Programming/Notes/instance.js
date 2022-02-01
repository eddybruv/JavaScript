/**
 * Anytime a constructor function creates a new object, 
 * that object is said to be an instance of its constructor. 
 * JavaScript gives a convenient way to verify this with the instanceof operator. 
 * instanceof allows you to compare an object to a constructor, 
 * returning true or false based on whether or not that object was created with the constructor.
 * 
 * If an object is created without using a constructor, 
 * instanceof will verify that it is not an instance of that constructor:
 */

let Bird = function(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "Black");

let result = crow instanceof Bird;

console.log(result);