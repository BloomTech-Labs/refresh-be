const db = require(_dbConfig);
const userMissionsModel = require('../user_missions/userMissionsModel')
module.exports = {
  add,
  editById,
  findAllByUserId,
  findByDateRange,
  findAllByQuestionId
};

const table = "answers";


function findAllByUserId(id) {
  return db(table)
    .where("user_id", id)
  
}

function findAllByQuestionId(user_id,question_id) {
  return db(table)
    .where({question_id})
    .where("user_id", user_id)
}

function findByDateRange(id, startDate, endDate) {
  return db(table)
    .whereBetween("answer_date", [startDate, endDate])
    .orderBy("user_id")
    .where("user_id", id);
}

function add(obj) {
  return db(table).insert(obj, "id")
  .then(res=>userMissionsModel.findAll(obj.user_id))
}

function editById(user_id,id){
  return db(table)
  .where({id})
  .andWhere({user_id})
  .update(update, "*");
}
