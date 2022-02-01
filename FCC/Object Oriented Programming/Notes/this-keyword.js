/**
 * "this" keyword is used to access members of that object from inside the object
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    },
};

dog.sayLegs();