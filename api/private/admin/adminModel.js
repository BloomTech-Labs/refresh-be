const db = require(_dbConfig);

module.exports = {
  findAll,
  findById,
  remove,
  register,
  editById,
  findByUserName
};

const table = "admin";
function findAll() {
  return db(table);
}

function findById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(table)
    .where({ id })
    .first()
}

function findByUserName(admin) {
  if (admin.username) {
    const username = admin.username;
    return db(table)
      .where({ username })
      .first();
  }
}

function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
function editById(id, update) {
  return db(table)
    .where({ id })
    .update(update, "*");
}
function register(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}
