const db = require(_dbConfig);

module.exports = {
  findAllRolesById,
  findAll,
  findById,
  remove,
  addUserRole,
  editById,
};

const table = 'roles';
const user_roles = "user_roles";
function findAllRolesById(user_id) {
 return db(user_roles + " as ur ")
  .select("rt.id")
  .join("users as u", "u.id", "ur.user_id")
  .join("roles as rt", "rt.id", "ur.role_id")
  .where("ur.user_id", user_id)
}

function findAll(){
  return db(table)
}

function findById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(table)
    .where({ id })
    .first()
}


function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
function editById(id, update) {
  return db(table)
    .where({ id })
    .update(update, '*');
}
function addUserRole(obj) {
  return db(user_roles)
    .insert(obj,'id')
}

