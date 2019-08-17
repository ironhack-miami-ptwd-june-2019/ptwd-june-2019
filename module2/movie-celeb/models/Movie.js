const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    image: String,
    cast: [{type: Schema.Types.ObjectId, ref: 'Celebrity'}]
})



const movieModel = mongoose.model('Movie', movieSchema)



module.exports = movieModel;