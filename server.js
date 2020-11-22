// Require our modules and set up our setting variables
const express = require('express');
const port = process.env.PORT || 3000;

// create middleware path
const morgan = require('morgan');
const methodOverride = require('method-override'); 

// create router path
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');


// create the express app
const app = express();

// Configure server setting <-- app.set()
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    console.log('Hello SEI!');
    req.time = new Date().toLocaleTimeString();
    next();
  });

// Mount our middleware <-- app.use()
   // static middleware for serving CSS, Front-end JS & Images
app.use(methodOverride('_method'))  // POST /skills/1?_method=DELETE -> DELETE / skills/1
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


// all routes pertaining to /skills/*
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// Tell the app to listen on designated port
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`); 
});


