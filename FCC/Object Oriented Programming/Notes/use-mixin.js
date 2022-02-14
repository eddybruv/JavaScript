/**
 * For unrelated objects, its better to use mixins.
 * A mixin allows other objects to use a collection of functions
 */

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};

//flyMixin takes any object and gives it the fly method

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);