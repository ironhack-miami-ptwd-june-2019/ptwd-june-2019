/// ALL GLOBAL VARIABLES AND PACKAGES

//   name you give	   name of the package you installed
//       |                  |
const myExpress = require("express");
const PORT = 3000;
// here we are creating application
const app = myExpress();

// Connect "public/" folder to our express app
// makes everything inside public folder accessible to the rest of the app
app.use(myExpress.static("public"));


// ***********************************
// ROUTES
// ***********************************

//      '/' => means localhost:3000
//       ^
//       |    callback function as 2nd argument
app.get('/', (req, res, next) => res.send("Hello there!"));

// localhost:3000/homepage                                          this is the file to be displayed to users
app.get('/homepage', (req, res, next) => res.sendFile(__dirname + "/views/home.html"));

app.get('/about', (req, res, next) => res.sendFile(__dirname + "/views/about.html") );




app.listen(PORT, () => console.log("🏃‍ on port 3000"));