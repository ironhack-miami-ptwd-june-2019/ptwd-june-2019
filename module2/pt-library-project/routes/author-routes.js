const express = require("express");
const router = express.Router();

// require Author model in order to use it for CRUD
const Author = require("../models/Author");

// ****************************************************************************************

// GET - to display the form for Creating the authors
router.get("/authors/new", (req, res, next) => {
  // make sure you see all the folders that are inside the "views" folder,
  // you don't have to specify "views" folder tho
  // in res.render() we don't use '/' 🚨 before we put the the path to the hbs file we want to render
  res.render("author-views/new-author");
});

// ****************************************************************************************

// POST route to create a new author in the DB
{/* <form action="/authors/create" method="post"> */}
router.post("/authors/create", (req, res, next) => {
  // console.log("THE FORM: ", req.body);
  Author
    .create(req.body)
                          // take us to the page that already exist in our app
                          //    ^       ->  this is the URL so it HAS to start with '/'
                          //    |      |
                          //    |      |
    .then( newAuthor => res.redirect("/authors") )
    .catch(err => console.log("Error while creating a new author: ", err));
});

// ****************************************************************************************

// GET all authors from the DB
router.get("/authors", (req, res, next) => {
  Author
    .find()
    .then(authorsFromDB => res.render("author-views/allAuthors", { authors: authorsFromDB }))
    .catch(err => console.log("Error while getting the authors from the DB: ", err));
});


// in order to use routes anywhere else in this application, we have to export them
module.exports = router;