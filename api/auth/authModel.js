const db = require(_dbConfig);
module.exports = {
  addUser,
  findByEmail,
  findById,
  findOrCreateByEmail
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

function findById(id) {
  console.log(id);
  return db(table)
    .select("*")
    .where({ id })
    .first();
}

function findByEmail(email) {
  return db(table + " as u")
    .select("u.id", "u.email", "u.password")
    .where({ email })
    .first();
}

async function findOrCreateByEmail(email) {
  const user = await db(table)
    .where({ email })
    .first();
    if(user){
      return {...user,message:"Welcome Back"}
    }else{
      addUser({email,password:'afiou89273928309w8e093279868723hrf876t32ur874r9y87'})
    }
}

function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
