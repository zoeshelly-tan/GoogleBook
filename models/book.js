const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title of the book from the Google Books API"
  },
  authors: { 
    type: String,
    trim: true,
    required: " The books's author(s) as returned from the Google Books API"
  },
  description: {
    type: String,
    required: "The book's description as returned from the Google Books API"
  },
  image: {
    type: String,
    required: "The Book's thumbnail image as returned from the Google Books API"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
