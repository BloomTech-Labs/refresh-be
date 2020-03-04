const db = require('../data/db-config');

module.exports = {
    getAdminBy,
    getAdminProfileById,
    addAdmin
}

function getAdminBy(filter) {
    return db('admin').where(filter)
}

function getAdminProfileById(id) {
    return db('admin').where({ id }).first();
}

function addAdmin(admin) { 
    return db('admin')
        .insert(admin, 'id')
        .then(ids => {
            const [id] = ids;
            return getAdminProfileById(id)
        })
}
