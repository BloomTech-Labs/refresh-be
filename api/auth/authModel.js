const db = require(_dbConfig);
const Profile = require("../private/profile/profileModle");
const bcrypt = require("bcrypt");

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
  const email = profile.email;
  const user = await db(table)
    .select("email", "id")
    .where({ email })
    .first();

  //If the user exist
  if (user) {
    return { ...profile, message: "Welcome Back" };
  } else {
    //Encrypt Password, consider doing off AccessToken
    const password = bcrypt.hashSync(Date.now() + email, 14);
    
    const newUser = await addUser({email,password})
    
    delete profile.email
    const newProfile = await Profile.createProfile({
      user_id:newUser.id,
      ...profile,
    })

    delete newProfile.id
    return {...newProfile,newUser:'Welcome New User'}
  }
}

function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
