/**
 * @brief : Write concise declarative functions with ES6.
 * You can remove the function keyword and the colon altogether when defining functions
 */

const person = {
    name: "John",
    sayHello() {
        return `Hello! My name is ${this.name}`;
    }
}