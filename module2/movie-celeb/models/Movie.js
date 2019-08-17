const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    image: String,
})



const movieModel = m.model('Movie', movieSchema)



module.exports = movieModel;