const PORT = 3000;
// all requires will always go in the begionning of the file!
const myHttp = require("http");

// how to get pckage available in this file and how to use it:
const myChalk = require("chalk");
console.log("This is my firdst node app 🚀");
console.log(myChalk.red("This text is red"));
console.log(myChalk.green("This text should purple 💅"));



// how to create server:

const server = myHttp.createServer((request, response) => {
    console.log(`Requested URL is ${request.url} `);
    if(request.url === "/"){
        response.write("This is the data from server.js and it's cool that it gets updated automatically!");
        response.end();
    } else if (request.url === "/ptwd"){
        response.write(`Alina
        henry
        Analbel`);

        response.end();
    } else {
        response.write("You want to access to not existing page sir or ma'am!");
        response.end();
    }
});

server.listen(PORT, () => console.log("Listening on 3000"));
