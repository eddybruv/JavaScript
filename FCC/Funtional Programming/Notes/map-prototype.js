// The global variable
const s = [23, 65, 98, 5];

//remeber that every function is a first class object
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  console.log(this.length);
  // Only change code above this line
  return newArray;
};


const new_s = s.myMap(
  //callback function
  function (item) {
    return item * 2;
});
