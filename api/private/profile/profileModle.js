const db = require(_dbConfig);
module.exports = {
  findAll,
  findByuser_id,
  findByProfileId,
  removeByuser_id,
  createProfile,
  editByuser_id
};
const table = "profile";
function findAll() {
  return db(table);
}
function findByuser_id(id) {
  return db(table)
    .where("user_id", id)
    .first();
}

function findByProfileId(id) {
  return db(table)
    .where({ id })
    .first();
}
function removeByuser_id(id) {
  return db(table)
    .where({ id })
    .del();
}
function editByuser_id(id, update) {
  return db(table)
    .where("user_id", id)
    .update(update, "*");
}
function createProfile(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findByProfileId(id));
}
