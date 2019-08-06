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
// Cat
//     .create({ name: "Garfield", age: 17, color: "orange" })
//     .then( catDoc => console.log("Cat create worked well: ", catDoc) )
//     .catch( error => console.log("VCreating a new cat went wrong! Try again 😞 ", err));

//     // ModelName.create().then().catch()

//     const sandrasCat = new Cat({ name: "Milo", age: 4 });
//     sandrasCat
//         .save()
//         .then(newCat => console.log("A created cat is: ", newCat))
//         .catch(err => console.log("Error while creating a cat!", err));


// Reading the cats from DB (use find(), findOne(), findById())
// ==========================================================

Cat
    .find({ age: { $gt: 10 } })
    .then(catDoc => console.log("Found this 🐈: ", catDoc))
    .catch( err => console.log("Error while getting the cats: ", err));

Cat
    .findById("5d48d51c036739dace0141c8")
    .then(foundCat => console.log("Found this cat by their ID: ", foundCat))
    .catch( err => console.log("Error while getting the cats: ", err));
