/**
 * @brief : Testing Objects for Properties
 * We can use the:
 * .hasOwnProperty(propname) to check if the object has a given property name.
 * .hasOwnProperty() returns true or false if property if found or not.
 */

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");