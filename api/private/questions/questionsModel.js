const db = require(_dbConfig);
module.exports = {
  findAll,
  findById,
  remove,
  add,
  editById
};
const table = "questions";
function findAll() {
  return db(table);
}
function findById(id) {
  return db(table)
    .where({ id })
    .first();
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
function add(obj) {
  console.log(obj, " in Questions Model")
  return db(table)
    .insert(obj, "id")
}
