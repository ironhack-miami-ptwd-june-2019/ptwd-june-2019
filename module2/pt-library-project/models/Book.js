const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema =  new Schema({
  title: String,
  description: String,
  rating: Number,
  imageUrl: String,
  author: {
    // we want to reference authors inside the book model and for that we will use their IDs
    // this is telling us that in "author" property of each book object, we will have 
    // saved ObjectId that belongs to one of the authors from the authors collection
    type: Schema.Types.ObjectId,
    ref: "Author"
  }
},{
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;