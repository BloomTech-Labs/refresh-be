const db = require(_dbConfig);
module.exports = {
  findAll,
  findById,
  remove,
  add,
  editById
};
const table = "user_missions";
//Finds all Missions by User id Segrigated by progress status.
async function findAll(id) {
  //Id of all returned missions
  const filterdMissions = [];

  //Daily Missions filter within 24 hours, UTC, set to server time
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const tomorrow = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
  );

  //Returns All missions in progress between Above Dates
  let missions_in_progress = await db("missions as m")
    .select(process.env.NODE_ENV !== 'test' && db.raw("array_agg(a.answer) as totals"), "m.*")
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

  //No Missions in Progress
  if (!missions_in_progress.length) {
    missions_in_progress = "No Missions Currently in progress for today";
  } else {
    //Verify all mission answers are countable and numbers
    await missions_in_progress.forEach((mission, i) => {
      //Add Returned Mission Id to filtered Missions
      filterdMissions.push(missions_in_progress[i].id);
      
      //Get Total Mission Progress. 
      let count = 0;
      mission.totals &&
        //Loops through array of totals
        mission.totals.forEach(n => {
          n = parseInt(n);
          count = Number(n) ? count + n : count;
        });
      mission.mission_complete = count >= mission.goal ? true : false;
      mission.point_current = count;
    });
  }

  //Return All other User Missions Not In Progress
  const missions_needing_attention = await db(table + " as um")
    .select("m.*")
    .join("missions as m", "m.id", "um.mission_id")
    .where("um.user_id", id)
    .whereNotIn("m.id", filterdMissions);

  return {
    user_missions: {
      missions_in_progress,
      missions_needing_attention
    }
  };
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
