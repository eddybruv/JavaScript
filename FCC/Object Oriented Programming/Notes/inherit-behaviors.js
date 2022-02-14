/**
 * Step 1: Making an instance of a supertype(parent)
 */

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

