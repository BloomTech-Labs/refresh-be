const db = require('../data/db-config');

module.exports = {
    getUsersProfiles,
    getUserProfileById,
    getUserBy,
    getUserTeamName,
    addUser,
    deleteUser,
    updateUser,
    getUserMetrics,
    updateUserMetrics
}

function getUsersProfiles() {
    return db('users')
        .leftJoin('teams', 'teams.id', 'users.team_id')
        .select('users.id', 'email', 'full_name', 'avatar', 'users.points', 'team_id', 'teams.name', 'water', 'exercise', 'breaks', 'sleep')
}

function getUserProfileById(userId) {
    return db('users')
        .leftJoin('teams', 'teams.id', 'users.team_id')
        .select('users.id', 'email', 'full_name', 'avatar', 'users.points', 'team_id', 'teams.name', 'water', 'exercise', 'breaks', 'sleep')
        .where('users.id', userId)
        .first();
}
function getUserMetrics(userId){
    return db('users')
        .select('id',"full_name", 'water', 'exercise', 'breaks', 'sleep')
        .where('id', userId)
        .first()
}

function getUserBy(filter) {
    return db('users').where(filter)
}

function getUserTeamName(userId) {
    return db('teams').join('users', 'users.team_id', 'teams.id').where('users.id', userId).select('teams.name').first()
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
async function updateUserMetrics(id, changes) {
    const [updatedUserMetrics] = await db('users')
        .where({ id })
        .update(changes)
        .returning('users.water', 'users.exercise', 'users.breaks', 'users.sleep')
    return updatedUserMetrics
}