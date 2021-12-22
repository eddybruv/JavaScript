/**
 * @brief : Use destructuring assignment to extract values from objects
 */

const user = {
    name: "Edwin",
    age: 20,
    sex: 'M'
}

const {name, age} = user;
console.log(name + " " + age);

//we can also use other variable names
const {name: username, age:userAge} = user;
console.log(userAge + " " + username);

//we can extract values from nested objects
const user = {
    johnDoe: {
        age: 34,
        email: 'johndoe@fcc.com'
    }
};

const {johnDoe: {age, email}} = user;

//to user new variables:
const { johnDoe: {age: userAge2, email: userEmail}} = user;

