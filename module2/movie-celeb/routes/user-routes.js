const express = require('express');
const router  = express.Router();
const User    = require('../models/User');

const bcrypt = require('bcryptjs');

const passport = require("passport");



router.get('/signup', (req, res, next)=>{

    res.render('user-views/signup')


})

router.post('/signup', (req, res, next)=>{

    let username = req.body.theUsername;
    let pword = req.body.thePassword;

  if(!username || !pword){
    req.flash('error', 'please provide both username and password it seems you have forgotton one or both')
    res.redirect('/signup')
  }



    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pword, salt);

    User.create({username: username, password: hashedPassword})
    .then(()=>{
      req.flash('success', 'account successfully created')
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err)
    })
})


router.get('/login', (req, res, next)=>{

    res.render('user-views/login')
})

router.post('/login', passport.authenticate("local", {
  successRedirect: "/celebrities",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));


  // old version without passport
  //   const uName = req.body.theUsername;
  //   const pword = req.body.thePassword;


  // User.findOne({ "username": uName })
  // .then(user => {
  //     if (!user) {
  //       res.redirect('/')
  //     }
  //     if (bcrypt.compareSync(pword, user.password)) {
  //       // Save the login in the session!
  //       req.session.currentlyLoggedIn = user;
  //       res.redirect("/celebrities");
  //     } else {
  //       res.render("auth/login", {
  //         errorMessage: "Incorrect password"
  //       });
  //     }
  // })
  // .catch(error => {
  //   next(error);
  // })
  // begin new verison with passport



// })



router.post('/logout', (req, res, next)=>{
  req.logout();
  res.redirect('/login')
})


router.get('/secret' ,(req, res, next)=>{
  if(!req.user){
    req.flash('error', 'please log in to view the secret page')
    res.redirect('/login')
  }

 
        res.render('secret')
 


})








module.exports = router;