const db = require(_dbConfig);
const Profile = require('../private/profile/profileModle')
const bcrypt = require('bcrypt')

module.exports = {
  addUser,
  findByEmail,
  findById,
  findOrCreateByEmail
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

function findById(id) {
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

async function findOrCreateByEmail(profile) {
  
  const email=profile.email
  const user = await db(table)
    .where({ email })
    .first();
    if(user){
      return {...user,...profile,message:"Welcome Back"}
    }else{
      return addUser(
        {email,
          password: bcrypt.hashSync(Date.now() + email, 14)
        })
      .then(res =>{
        delete res.password
        profile = {...profile,user:{...res}}
        return profile
      })
    }
}

function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
