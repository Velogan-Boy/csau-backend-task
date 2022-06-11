require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const peopleRouter = require('./routes/peopleRouter');
const clubRouter = require('./routes/clubRouter');

// create an express application
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV == 'development') {
   app.use(morgan('dev')); // logs every request to the console
}
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(cors()); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.static('public')); // serve static files from public folder

// ROUTING
app.use('/people', peopleRouter);
app.use('/club', clubRouter);

// SERVER
const port = process.env.PORT || 8000; // process.env.PORT is for heroku
app.listen(port, () => {
   console.log(`✅ Server listening on port ${port}`);
});

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
   console.log('✅ MongoDB connection successufull');
});
