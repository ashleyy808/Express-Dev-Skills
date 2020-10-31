// Require our modules and set up our setting variables
const express = require('express');
const port = process.env.PORT || 3000;
// Configure server setting <-- app.set()
const app = express();

// Mount our middleware <-- app.use()
app.set('view engine', 'ejs');
// Mount our routes <-- app.use()
    //Define another call to app.use() mounting a router for the homepage

// Tell the app to listen on designated port