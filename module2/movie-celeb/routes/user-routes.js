const express = require('express');
const router  = express.Router();
const User    = require('../models/User');

const bcrypt = require('bcryptjs');



router.get('/signup', (req, res, next)=>{

    res.render('user-views/signup')


})

router.post('/signup', (req, res, next)=>{

    let username = req.body.theUsername;
    let pword = req.body.thePassword;

    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pword, salt);

    User.create({username: username, password: hashedPassword})
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err)
    })
})


router.get('/login', (req, res, next)=>{

    res.render('user-views/login')
})

router.post('/login', (req, res, next)=>{
    const uName = req.body.theUsername;
    const pword = req.body.thePassword;


  User.findOne({ "username": uName })
  .then(user => {
      if (!user) {
        res.redirect('/')
      }
      if (bcrypt.compareSync(pword, user.password)) {
        // Save the login in the session!
        req.session.currentlyLoggedIn = user;
        res.redirect("/celebrities");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error);
  })


  router.post('/logout', (req, res, next)=>{
      req.session.destroy()
      res.redirect('/celebrities')
  })




})


router.get('/secret', (req, res, next)=>{

    if(req.session.currentlyLoggedIn){
        res.render('secret')
    } else{
        res.redirect('/celebrities')
    }


})








module.exports = router;