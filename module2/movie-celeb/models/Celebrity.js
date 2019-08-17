const m = require('mongoose');

const Schema = m.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'}
})



const theCelebModel = m.model('Celebrity', celebSchema)
//mongoose expects the name of the model to be singular and havea capital first letter
//name of the collection in DB will be called celebrities with lower case C because mongoose will do it by magic


module.exports = theCelebModel;