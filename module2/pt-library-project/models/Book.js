const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema =  new Schema({
  title: String,
  description: String,
  rating: Number,
  imageUrl: String,
  author: {
    // this is telling us that in "author" property of each book model we will have 
    // saved ObjectId that belongs to Author model
    type: Schema.Types.ObjectId,
    ref: "Author"
  }
},{
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;