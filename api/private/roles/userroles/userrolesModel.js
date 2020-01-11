const db = require(_dbConfig)
module.exports={
    findUserRolesByUserId,
    addUserRole
}

const user_roles = "user_roles";

function findUserRolesByUserId(user_id) {
 return db(user_roles + " as ur ")
  .select("rt.*")
  .join("users as u", "u.id", "ur.user_id")
  .join("roles as rt", "rt.id", "ur.role_id")
  .where("ur.user_id", user_id)
  .orderBy('rt.id')
}

function addUserRole(obj) {
    return db(user_roles)
      .insert(obj,'id')
}