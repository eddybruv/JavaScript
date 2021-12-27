/**
 * @brief : Use getters and setters to control access to an object
 * 
 * Getter functions are meant to simply return the value of an object's private variable to the user
 * without the user directly accessing the private variable.
 * 
 * Setter functions are meant to modify the value of an object's private variable based on the
 * value passed in to the setter function. 
 * This change could involve calculations or even overwritting the previous value completely.
 */

class Book {
    constructor (author) {
        this._author = author;
    }

    //getter function
    get writer(){
        return this._author;
    }

    //setter function
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book("La casa");
console.log(novel.writer);
novel.writer = "Proffessor";
console.log(novel.writter);