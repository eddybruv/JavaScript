/**
 * Whenever we manually set the prototype to a new object, 
 * we erase the constructor property.
 * To fix this a prototype is manually set to a new object.
 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, //manually setting the constructor
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};