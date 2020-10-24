const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Uncomment it when you want to poplate data in user view..
// require ('./utils/populateData')

const app = express();

const PORT = 4000;

app.use(bodyParser.json());

require('./controller')(app);
app.use((err, req, res, next) => {
  if(err) {
    res.setHeader('Content-type', 'application/json');
    res.statusCode = err.statusCode;
    res.end(JSON.stringify({message: err.message}));
  }
});

app.listen(PORT, () => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.ppuse.mongodb.net/<TestDB>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  console.log(`The server has been started at port ${PORT}`);
});