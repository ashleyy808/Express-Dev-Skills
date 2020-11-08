// require our modules
const express = require('express');

// create a router object
const router = express.Router();


//require the controller module
//const skillsCtrl = require('../controllers/skills');
const indexCtrl = require('../controllers/index');


// all routes in this module start at /skills
//router.get('/', skillsCtrl.index);

router.get('/',indexCtrl.index); 


// export the router object
module.exports = router;