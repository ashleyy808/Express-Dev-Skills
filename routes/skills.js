// require express
const express = require('express');

// create a routrer object
const router = express.Router();

// require the controller module
const skillsCtrl = require('../controllers/skills');


// GET /index -> Index Route -> Give me all the things on a page
router.get('/', skillsCtrl.index);

// GET / index/new -> Non-Restful -> give me a view that provides a form
router.get('/new', skillsCtrl.new); 

// GET /index/:id -> Show Route -> Give me one thing based on it's id (some unique identifier)

router.get('/:id', skillsCtrl.show);

// POST /index -> Create a new skills
router.post('/', skillsCtrl.create); 

//router.post('/:id', skillsCtrl.new); 

// DELETE /index/:id -> delete route -- delete a specific skill
router.delete('/:id', skillsCtrl.delete); 

//GET /index/:id/edit - edit a skill-> take me to a page where I can make an edit
router.get('/:id/edit', skillsCtrl.edit);  

//PUT /index/:id - Update a skill - update a specific skill
router.put('/:id', skillsCtrl.update);



// export router object

module.exports = router;