/**
 * @brief : Accesing Object Properties with Variables
 */

//Using a variable to access a property
const dogs = { 
    Fido: "Mutt", 
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";     //assigns myDog to "Doberman"
const myBreed = dogs[myDog] //same thing as using dogs.Hunter
console.log(myBreed);       //returns "Doberman"

/**
 * Another way to use this concept is when the property's
 * name is collected dynamically during the program execution.
 */

const someObj = {
    propName: "John",
};

function propPrefix(str){
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);