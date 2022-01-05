/**
 * Getter functions are meant to return the value of an object's private variable
 * to the user without the user directly accessing the private variable
 * 
 * Setter functions are meant to modify the value of an object's private variable 
 * based on the value passed into the setter function.
 */

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
