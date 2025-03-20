/*
Create a Library constructor that initializes a books array. Implement:

• addBook(book): Adds a book to the books array.
• findBook(tit1e): Searches for a book by title and returns "Book found" or "Book not found".
• Implement Library constructor with a books array.
• Attach addBook(book) and findBook(tit1e) methods to the prototype.
*/

function Library() {
  // Initialize books property
  this.books = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) {
  return this.books.push(book);
};

// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  return this.books.includes(title) ? "Book found" : "Book not found";
};
