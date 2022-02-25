const users = [
  { name: 'John', age: 34},
  { name: 'Amy', age: 20},
  { name: 'camperCat', age: 10}
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log("Sum of ages: " + sumOfAges);

//returning an obj
const users_2 = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const userObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(userObj);