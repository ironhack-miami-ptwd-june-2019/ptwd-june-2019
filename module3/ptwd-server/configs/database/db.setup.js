const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost/ptwd-server', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));