/**
 * In addition to what is inherited from the supertype, we can add 
 * unique methods to singular subtypes. Functions are added to the prototype
 * the same way as any constructor function.
 */

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;  //change constructor

Dog.prototype.bark = function () {
  console.log("Woof!");
};

let beagle = new Dog();
beagle.bark();

/**
 * We can overide this method by redefining it.
 */

Dog.prototype.bark = function() {
  console.log("Hey man!");
}

beagle.bark();