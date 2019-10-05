require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

// when working with sessions, install "express-session" and "connect-mongo" npm packages
// and require them
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

mongoose
  .connect('mongodb://localhost/sessions-cookies', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// use sessions anywhere after cookie parser
app.use(
  session({
    // USUALLY YOU WOULD SAVE YOUR SESSION SECRET IN THE .ENV FILE
    // SESSION SECRET HELPS IN MAKING THAT HUGE STRING INSIDE THE COOKIE
    secret: "my-super-strong-secret-shhhh",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 60 }, // 1 min * 60 = 1h
    store: new MongoStore({
      mongooseConnection: mongoose.connection, // store the session in the MongoDb
      ttl: 24 * 60 * 60 // 1 day -> expiration of session
    })
}));


// Express View engine setup

// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// middleware to create a variable (we named it "theUser")
// and to make it available throughout the whole application in all the views
app.use((req, res, next) => {
  if(req.session.currentUser){
    res.locals.theUser = req.session.currentUser;
    next();
  } else {
    next();
  }
})

// ROUTES MIDDLEWARE
app.use('/', require('./routes/index'));

module.exports = app;