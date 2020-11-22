module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

const skills = [
    {skill: 'JavaScript', level: 5},
    {skill: 'HTML5', level: 5},
    {skill: 'CSS3', level: 5},
];

function getAll() {
    return skills;
}


function getOne(id) {
    return skills[id];
}


function create(skill) {
    skills.push(skill)
    //return skill;
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function updateOne(skill, id) {
    skills.splice(id, 1, skill);
}