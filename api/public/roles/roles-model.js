const db = require(_dbConfig);

module.exports = {
  findAll,
  findById,
  remove,
  addAdmin,
  editById,
};

const table = 'roles';
function findAll() {
  return db(table);
}

function findById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(table)
    .where({ id })
    .first()
    .then(res => console.log(res))
    .catch(res => console.log(res));
}


function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
function editById(id, update) {
  return db(table)
    .where({ id })
    .update(update, '*');
}
function addAdmin(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}

