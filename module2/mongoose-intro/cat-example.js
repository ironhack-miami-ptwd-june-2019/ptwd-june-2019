const mongoose = require("mongoose");

// import/require the model
const Cat = require("./models/Cat.js");
// const Cat = require("./models/Cat"); => you don't have to use ".js"

// CONNECT YOUR EXPRESS APP TO THE MONGO DB 
mongoose
                                // catApp is the name of our database
  .connect('mongodb://localhost/catApp', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------
// .create() is a mongoose method and under the hood uses insertOne and insertMany
Cat
    .create({ name: "Garfield", age: 17, color: "orange" })
    .then( catDoc => console.log("Cat create worked well: ", catDoc) )
    .catch( error => console.log("VCreating a new cat went wrong! Try again 😞 ", err));
