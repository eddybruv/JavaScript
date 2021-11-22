/**
 * @brief Objects are variables but contain many values.
 */

var person = {
    firstName: "Edwin",
    age: 20,
    lastName: "Ajong",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//the "this" keyword is a pointer to "names" found in that object

console.log(person.fullName());
console.log(person.age);