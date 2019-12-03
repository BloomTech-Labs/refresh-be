const db = require(_dbConfig);
module.exports = {
  findAll,
  findById,
  remove,
  add,
  editById
};
const table = "user_missions";
async function findAll(id) {
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const tomorrow = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
  );

  console.log(today, tomorrow);
  const missionProgress = await db("missions as m")
    .select(db.raw("array_agg(a.answer) as totals"), "m.*")
    .from("answers as a")
    .join("missions as m", "m.question", "a.question_id")
    .whereBetween("answer_date", [today, tomorrow])
    .andWhere("a.user_id", id)
    .as("mp")
    .groupBy(
      "m.id",
      "m.vertical",
      "m.description",
      "m.question",
      "m.point_value",
      "m.goal",
      "m.dotw",
      "m.start_date",
      "m.ending_date",
      "m.daily_reminders"
    );
  //'m.id','m.vertical','m.description','m.question','m.point_value','m.point_current','m.goal','m.dotw','m.start_date' ,'m.ending_date' ,'m.daily_reminders'

  await missionProgress.forEach(mission => {
    let count = 0;
    mission.totals &&
      mission.totals.forEach(n => {
        n = parseInt(n);
        count = Number(n) ? count + n : count;
      });
    mission.mission_complete = count >= mission.goal ? true : false;
    mission.point_current = count;
  });
  console.log('id',id)
  const profile = await db('profile').where('user_id',id).first()
  console.log(profile)

  return { ...missionProgress };
}

function findById(id) {
  return db(table)
    .where({ id })
    .first();
}
function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
function editById(id, update) {
  return db(table)
    .where({ id })
    .update(update, "*");
}
function add(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
