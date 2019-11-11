const db = require(dbConfig);

module.exports = {
  findAll,
  findById,
  remove,
  register,
  editById,
  findByQuestion
};

const table = 'questions';
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

function findByQuestion(question) {
  if (question) {
    return db(table)
      .where({ question })
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
    .update(update, '*');
}
function register(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}
