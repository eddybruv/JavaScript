/**
 * @brief : Use class syntax to define a constructor function
 */

//ES5:
var SpaceShuttle = function (targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zues = new SpaceShuttle('Jupiter');

//ES6:
class SpaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const kratos = new SpaceShuttle('Sparta');
    