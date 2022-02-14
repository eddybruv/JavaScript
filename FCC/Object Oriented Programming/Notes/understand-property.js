/**
 * Just like people inherit genes from their parents, 
 * an object inherits its prototype directly from the constructor function that created it.
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// beagle inherits its prototype from the Dog constructor function
// we can show this relationship with the isPrototypeOf method

console.log(Dog.prototype.isPrototypeOf(beagle)); //returns true.