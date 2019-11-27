const express     = require('express');
const router      = express.Router();
const bcrypt      = require("bcryptjs");
const bcryptSalt  = 10;
const User        = require("../models/User");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// SIGNUP
router.get('/signup', (req, res) => res.render('signup-form'));

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  User.create({
    // left side are the names that come from database (so these are the names from the MODEL)
    username, // username: username => we can just say "username" since it's named equally here in the route and in the database 
    password: hashPass
    // left side are the names we gave here in the route file (ex. hashPass)
  })
  .then(() => res.send("signed up"))
  .catch(error => console.log(error))
});


// LOGIN
router.get('/login', (req, res) => res.render('login-form'));

router.post("/login", (req, res, next) => {
  const { username, password } = req. body;

  if (username === "" || password === "") {
    res.render("login-form", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  User.findOne({ username })
  .then( foundUser => {
    if(!foundUser) {
      res.render("login-form", { errorMessage: "Username doesn't exist" })
    }
    if(bcrypt.compareSync(password, foundUser.password)){
      // Save the login in the session!
      req.session.currentUser = foundUser;
      res.redirect('/')
    } else {
      res.render("login-form", {
        errorMessage: "Incorrect password"
      });
    }
  })
  .catch( err => next(err));
})

// METHOD 1 - CREATE A MIDDLEWARE:
// we can create a middleware to protect all the routes that come after this point in the code
// router.use((req, res, next) => {
//   if(req.session.currentUser){
//     next();
//   } else {
//     res.redirect("/login")
//   }
// })

// METHOD 2:
// create a function that does the same thing as middleware above but 
// YOU HAVE OT PASS IT AS ADDITIONAL ARGUMENT IN THE ROUTE YOU WANT TO PROTECT 
const checkIfLoggedIn = ((req, res, next) => {
  if(req.session.currentUser){
    next();
  } else {
    res.redirect("/login")
  }
})

router.get("/private-page", checkIfLoggedIn, (req, res) => res.render("private"));

router.get("/profile", checkIfLoggedIn, (req, res) => res.render("profile"));

router.get("/logout", checkIfLoggedIn, (req, res) => {
  req.session.destroy();
  res.redirect("/login");
})





module.exports = router;
