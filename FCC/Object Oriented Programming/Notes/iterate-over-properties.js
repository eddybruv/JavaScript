/**
 * There are two kinds of properties:
 * Own Porperties: Defined directly on the object instance
 * Prototype properties: Defined on the prototype
 */

function Dog(name) {
this.name = name; //own property
}

Dog.prototype.numLegs = 4;  //prototype property

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);