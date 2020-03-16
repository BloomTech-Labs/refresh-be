const db = require('../data/db-config');

module.exports = {
    getAllTeams,
    getTeamById,
    addTeam,
    deleteTeam,
    updateTeam
}

function getAllTeams() {
    return db('teams').select('id','name', 'points')
}

function getTeamById(id) {
    return db('teams').where({ id }).first();
}

function addTeam(team) {
    return db('teams')
        .insert(team, 'id')
        .then(ids => {
            const [id] = ids;
            return getAllTeams()
        }) 
}

function deleteTeam(id) {
    return db('teams')
        .where({ id })
        .del()
}

async function updateTeam(id, changes) {
    const [updatedTeam] = await db('teams')
        .where({ id })
        .update(changes)
        .returning('*')
    return updatedTeam
}