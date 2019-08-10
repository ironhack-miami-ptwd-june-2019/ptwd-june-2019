const express = require("express");
const router = express.Router();

// require Author model in order to use it for CRUD
const Author = require("../models/Author");

// GET - to display the form for Creating the authors
router.get("/authors/new", (req, res, next) => {
  // make sure yoy see all the folders that are inside the "views" folder,
  // you don't have to specify "views" folder tho
  res.render("author-views/new-author");
});

// post route to create a new author in the DB
{/* <form action="/authors/create" method="post"> */}
router.post("/authors/create", (req, res, next) => {
  // console.log("THE FORM: ", req.body);
  Author
    .create(req.body)
    .then( newAuthor => console.log("NEW AUTHOR: ", newAuthor) )
    .catch(err => console.log("Error while creating a new author: ", err));


});



// in order to use routes anywhere else in this application, we have to export them
module.exports = router;