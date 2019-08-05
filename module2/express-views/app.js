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

// *******************
// ROUTES
// *******************

app.get("/", (req, res, next) => res.render("index.hbs"));

                                // it's already pre-fixed with "/views/" that's why
// localhost:3000/cool          // we don't have to put the full path here
app.get("/cool", (req, res, next) => res.render("cool-page.hbs"));

app.get("/students", (req, res, next) => {
    // let's just get
    const names = theData.map(student => student.name);
    console.log(names);

    // "render()" sends a template file as a response
    // (it already knows to look inside "views/")
                                            // allStudentsNames is the variable I will use in hbs file
    res.render("students/students-list.hbs", { allStudentsNames: names });
    // res.render("students/students-list.hbs", { theData });
});

app.get('/student', (req, res, next) => {
    const randomIndex = Math.floor(Math.random() * theData.length);
    
    // here is the object that is going to be sent to the hbs file 
    const data = {
        oneRandomStudent : theData[randomIndex]
    };

    // you don't have to say views/students because views is default folder
    //           data is the name of the 
    //           object we created above
    //              ^
    //              |
    res.render('students/random-student.hbs', data);
});

app.listen(PORT, () => console.log("🏃‍ on 3000"));
