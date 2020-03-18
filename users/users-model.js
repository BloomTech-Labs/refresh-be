const db = require('../data/db-config');

module.exports = {
    getUsersProfiles,
    getUserProfileById,
    getUserBy,
    getUserTeam,
    addUser,
    deleteUser,
    updateUser
}

function getUsersProfiles() {
    return db('users').select('id', 'email', 'first_name', 'last_name', 'avatar', 'points', 'team_id')
}

function getUserProfileById(id) {
    return db('users').where({ id }).first();
}

function getUserBy(filter) {
    return db('users').where(filter)
}

function getUserTeam(teamId) {
    return('teams').join('users', 'users.team_id', 'teams.id').where('users.team_id', teamId).select('teams.name')
}

function addUser(user) { 
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return getUserProfileById(id)
        })
}

function deleteUser(id) {
    return db('users')
        .where({ id })
        .del()
}

async function updateUser(id, changes) {
    const [updatedUser] = await db('users')
        .where({ id })
        .update(changes)
        .returning('*')
    return updatedUser
}