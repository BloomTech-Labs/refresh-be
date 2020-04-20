const db = require('../data/db-config');
module.exports = {
    getAllMetrics,
    getMetricById,
    addMetric,
    deleteMetric,
    updateMetric
}

function getAllMetrics() {
    return db('metrics').select('id','water', 'exercise', 'breaks','sleep')
}

function getMetricById(id) {
    return db('metrics').where({ id }).first();
}
function addMetric(metric) {
    return db('metrics')
        .insert(metric, 'id')
        .then(ids => {
            const [id] = ids;
            return getAllMetrics()
        }) 
}

function deleteMetric(id) {
    return db('metrics')
        .where({ id })
        .del()
}

async function updateMetric(id, changes) {
    const [updatedMetric] = await db('metrics')
        .where({ id })
        .update(changes)
        .returning('*')
    return updatedMetric
}