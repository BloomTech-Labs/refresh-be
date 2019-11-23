const db = require(_dbConfig);
module.exports = {
  find,
  findAll,
  findByUserId,
  add,
  findByDateRange,
  findAllByQuestionId,
  add
};
const table = "answers";

function find(){
  return db(table);
}

function findAll(id) {
    return db(table)
      .where("user_id", id)
      .first();
  }

function findAllByQuestionId(id) {
  return db(table)
    .where({ id })
    .where("user_id", req.user.userId)
    .first();
}

function findByDateRange(startDate, endDate) {
  return db(table)
    .whereBetween("answer_date", [startDate, endDate])
    .orderBy("user_id")
}

function findByUserId(id) {
  return db(table)
    .where("user_id", id)
    .orderBy("answer_date");
}

function add(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}


  
