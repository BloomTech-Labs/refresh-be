const db = require(_dbConfig);
module.exports = {
  addUser,
  findByEmail,
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

function findByEmail(email) {
  return db(table + " as u")
    .select("u.id", "u.email", "u.password" )
    .where({ email })
    .first();
}

function addUser(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}
