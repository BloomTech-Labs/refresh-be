const db = require(_dbConfig);
module.exports = {
  addUser,
  findByName,
  findById,
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

function findById(id) {
  console.log(id)
  return db(table)
    .select("*")
    .where({id})
    .first()
}

function findByName(username) {
  return db(table + " as u")
    .select("u.id", "u.username", "u.password" )
    .where({ username })
    .first();
}

function addUser(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}
