/**
 * Step 2: Set the prototype of the subtype(Dog) to an instanve of the supertype(Animal)
 */

function Animal () {};

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog(); //create instance

beagle.eat();