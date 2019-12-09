const db = require(_dbConfig);
module.exports = {
  findAll,
  findById,
  remove,
  add,
  editById
};
const table = "missions";
function findAll() {
  return db(table + " as m")
    .select(
      "m.id as mission_id",
      "m.vertical",
      "m.description",
      "m.point_value",
      "m.goal",
      "m.dotw",
      "m.start_date",
      "m.ending_date",
      "m.daily_reminders",
      "q.question as question"
    )
    .join("questions as q", "q.id", "m.question");
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
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
