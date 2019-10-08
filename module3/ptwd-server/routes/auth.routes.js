const express = require("express");

const authRouter = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");

const passport = require("passport");

authRouter.post("/api/signup", (req, res, next) => {
  console.log("frontend form data: ", req.body);
  const { fullName, email, password } = req.body;

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
          
          req.login(userDoc, (err) => {
            if(err){
              res.status(401).json({ message: "Something happened when logging in after the signup" });
              return;
            }
            userDoc.encryptedPassword = undefined;
            res.status(200).json({ userDoc });  
          })
         } )
        .catch( err => next(err) ); // close User.create()
    })
    .catch(err => next(err)); // close User.findOne()
});

authRouter.post("/api/login", (req, res, next)  => {
  passport.authenticate("local", (err, userDoc, failureDetails) => {
    if(err){
      res.status(500).json({ message: "Something went wrong with login." })
    }
    if(!userDoc){
      res.status(401).json(failureDetails);
    }

    req.login(userDoc, (err) => {
      if(err){
        res.status(500).json({message: "Something went wrong with getting user object from DB"})
        return;
      }
      // set password to undefined so it doesn't get revealed in the client side (browser ==> react app)
      userDoc.encryptedPassword = undefined;
      // send json object with user information to the client
      res.status(200).json({ userDoc });
    } )
  })(req, res, next);
})

authRouter.delete("/api/logout", (req, res, next) => {
  // "req.logout()" is a Passport method that removes the user ID from session
  req.logout();
  // send empty "userDoc" when you log out
  res.json({ userDoc: null })
})

// check if user is logged in and if we are logged in what are user's details
// this is the information that is useful for the frontend application
authRouter.get("/api/checkuser", (req, res, next) => {
  // console.log("do i have user: ", req.user);
  if(req.user){
    req.user.encryptedPassword = undefined;
    // res.json(req.user)
    res.status(200).json({ userDoc: req.user })
  } else {
    res.status(401).json({ userDoc: null })
  }
})
module.exports = authRouter;