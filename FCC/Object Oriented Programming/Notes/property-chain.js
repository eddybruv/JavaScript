/**
 * All objects in JavaScript have a prototype. And an object's prototype 
 * itself is an object.
 */

function Dog(name) {
  this.name = name;
}

/**
 * Because a protoype is an object, a prototype can have its own prototype.
 * Object.prototype is a prototype of Dog.prototype
 */

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

Object.prototype.isPrototypeOf(Dog.prototype);  //returns true