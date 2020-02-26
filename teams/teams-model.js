const db = require('../data/db-config');

module.exports = {
    getAllTeams,
    getTeamById,
    addTeam,
    deleteTeam
}

function getAllTeams() {
    return db('teams').select('id','name')
}

function getTeamById(id) {
    return db('teams').where({ id }).first();
}

function addTeam(team) {
    return db('teams')
        .insert(team, 'id')
        .then(ids => {
            const [id] = ids;
            return getTeamById(id)
        })
}

function deleteTeam(id) {
    return db('teams')
        .where({ id })
        .del()
}