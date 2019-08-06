// require all the packages you will need

const express = require("express");

// package that allows templating and dynamic views
const hbs = require("hbs");
const PORT = 3000;
const app = express();

// import students data in app.js so we can use it in the routes
const theData = require("./students-data");

app.set("views", __dirname + "/views");

// sets hbs as default view engine
app.set("view engine", "hbs");


app.listen(PORT, () => console.log("🏃‍ on 3000"));
