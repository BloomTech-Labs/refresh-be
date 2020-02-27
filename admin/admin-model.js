const db = require('../data/db-config');

module.exports = {
    getAdminBy
}

function getAdminBy(filter) {
    return db('admin').where(filter)
}