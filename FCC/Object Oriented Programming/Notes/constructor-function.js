/**
 * Constructors are functions that create new objects. 
 * They define properties and behaviors that will belong to the new object. 
 * Think of them as a blueprint for the creation of new objects.
 */

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

/**
 * Constructors are defined with a capitalized name to distinguish from
 * other functons that are not constructors
 * 
 * Constructors use the <this> keyword to set properties of the object they
 * will create.
 * 
 * Constructors define properties instead of returning a value as other functions
 * might
 */

