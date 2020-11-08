const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill, 
    edit,
    update
};


function index(req, res) {
    res.render('skills/index', { 
        skills: Skill.getAll(),
    });
}

function show(req, res) {
    res.render('skills/show', {
        skillId: req.params.id,
        skill: Skill.getOne(req.params.id) // /skills/:id
    });
}

function newSkill(req, res) {
    res.render('index/new');
}

function create(req,res) {
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');  // Ask the browser to request GET /skills
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('index/edit', {
        SkillId: req.params.id,
        skill:Skill.getOne(req.params.id)
    });
}

function update(req, res) {
    req.body.done = false;
    Skill.updateOne(req.body, req.params.id);
    res.redirect('/skills');
}
