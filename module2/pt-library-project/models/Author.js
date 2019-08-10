const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  // unless you'll have more than one property defined you don't have to use this: { type: String }
  // firstName: { type: String }
  firstName: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  imageUrl: { 
    type: String, 
    default: "https://ih0.redbubble.net/image.513707627.9778/mp,550x550,matte,ffffff,t.3u1.jpg"
  }
}, {
  // keeps record when is created and updated
  timestamps: true
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;