const express = require("express");

const authRouter = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");

const passport = require("passport");

authRouter.post("/api/signup", (req, res, next) => {
  const { fullName, email, password } = req.body;
  // console.log("hello: ", req.body.password);

  if(fullName == "" || email == "" || password.match(/[0-9]/) === null){
    // send JSON file to the frontend if any of these fields are empty or password doesn't contain a number
    res.status(401).json({ message: "All fields need to be filled and password must contain a number! 🤨" });
    return;
  }

  User
    .findOne({ email })
    .then( foundUser => {
      if(foundUser !== null ){
        res.status(401).json({ message: "A user with the same email is already registered!" });
        return;
      }

      const bcryptSalt = 10;
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const encryptedPassword = bcrypt.hashSync(password, salt);

      User
        .create({ fullName, email, encryptedPassword })
        .then( userDoc => { 
          // if all good, log in the user automatically
          // "req.login()" is a Passport method that calls "serializeUser()"
          // (that saves the USER ID in the session)
          
          // req.login(userDoc, (err) => {
          //   if(err){
          //     res.status(401).json({ message: "Something happened when logging in after the signup" });
          //     return;
          //   }
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });  
          // })
         } )
        .catch( err => next(err) ); // close User.create()
    })
    .catch(err => next(err)); // close User.findOne()
});






module.exports = authRouter;