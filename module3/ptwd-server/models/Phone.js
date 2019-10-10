const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
})


module.exports = mongoose.model("Phone", phoneSchema);