require('./api/config');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// watch events
app.use(morgan('combined'));
// json parser
app.use(express.json());

// routes
// app.use(require('./api/routes/index'));

// connect to database

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
}

connectToDatabase();


app.listen(process.env.PORT, () => console.log(`Server listening port ${process.env.PORT}..........`));