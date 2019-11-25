const db = require(_dbConfig);

module.exports = {
  findAll,
  findById

};

const table = "question_groups";
function findAll() {
  return db(table);
}

function findById(id) {
  return db(table)
    .where({ id })
    .first()
    .then(group=>findAllQuestionsByArray(group))
}

function findAllQuestionsByArray(arr){
  return db('questions')
  .whereIn('id', arr.question_ids)
  .then(questions=>{
      return {group:arr.group,questions:[...questions]}
  })
}

// function findByUserName(admin) {
//   if (admin.username) {
//     const username = admin.username;
//     return db(table)
//       .where({ username })
//       .first();
//   }
// }

// function remove(id) {
//   return db(table)
//     .where({ id })
//     .del();
// }
// function editById(id, update) {
//   return db(table)
//     .where({ id })
//     .update(update, '*');
// }
// function register(obj) {
//   return db(table)
//     .insert(obj)
//     .then(([id]) => findById(id));
// }
