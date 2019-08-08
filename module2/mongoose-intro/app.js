// require all the packages you will need

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


// package that allows templating and dynamic views
const hbs = require("hbs");
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// MODELS
const Cat = require("./models/Cat");

app.set("views", __dirname + "/views");

// sets hbs as default view engine
app.set("view engine", "hbs");

// CONNECT YOUR EXPRESS APP TO THE MONGO DB 
mongoose
                                // catApp is the name of our database
  .connect('mongodb://localhost/catApp', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// ROUTES
// ======================================
// GET route - show all the cats
app.get("/cats", (req, res, next) => {
    console.log("IN THE ROUTE")
    Cat.find()
    .then(allTheCats => {
        // console.log("cats are: ", allTheCats)
        // res.locals makes global variable
        res.locals.allCats = allTheCats;
        // by default, my app knows to look for all views inside the VIEW folder
        res.render("cats-views/cats-view");
    })
    .catch(err => console.log("Error while getting the cats from DB 🚨", err));
});



// GET route - show the form to user to create a new cat
app.get("/cats/new", (req, res, next) => {
    res.render("cats-views/new-cat");
});

// POST route - to save the cat in the DB
app.post("/cats/create", (req, res, next) => {
    // console.log("form data: ", req.body);
    const newCat = {
        // <input type="text" name="theName" id="cat-name">
        name: req.body.theName,
        // <input type="number" name="theAge" id="cat-age">
        age: req.body.theAge
    };
    Cat.create(newCat)
    .then(cat => {
        // console.log("New cat created: ", cat)
        res.redirect("/cats");
    })
    .catch(err => console.log("Error while creating a new cat: ", err));
});

// GET route - show details of a specific cat (req.params)

app.get("/cats/:theId", (req, res, next) => {
    // console.log("ID is: ", req.params);
    Cat.findById(req.params.theId)
    .then(cat => res.render("cats-views/cat-details", cat))
    .catch(err => console.log("Err while getting details: ", err));
});

// GET route - search field (req.query)
app.get("/search", (req, res, next) => {
    // console.log("we typed in search this: ", req.query);
            // "name" comes from Cat model
                            // "catName" comes from the <input name="catName"> from the hbs file
    Cat.find({ name: req.query.catName })
    .then(cats => res.render("cats-views/cats-view", {cats}))
    .catch(err => console.log("Error while getting cats in search", err));
});



app.listen(PORT, () => console.log("🏃‍ on 3000"));
