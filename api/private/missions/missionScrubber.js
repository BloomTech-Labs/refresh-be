const questionModel = require("../questions/questionsModel");
module.exports = async (req, res, next) => {
  const errors = [];
  const cleanMission = {};
  const mission = req.body;
  const addProp = (prop, value) => {
    cleanMission[prop] = value;
  };
  !!mission.vertical
    ? addProp("vertical", mission.vertical)
    : errors.push({ vertical: "Vertical is Required" });
  !!mission.description
    ? addProp("description", mission.description)
    : errors.push({ description: "Description is Required" });
  !!mission.point_value
    ? addProp("point_value", mission.point_value)
    : errors.push({ point_value: "Point Value is required" });
  !!mission.goal
    ? addProp("goal", mission.goal)
    : errors.push({ goal: "Goal is required" });
  //Question
  mission.question =
    mission.question &&
    (await questionModel.add({ question: mission.question }));
  !!mission.question && Number(mission.question)
    ? addProp("question", mission.question)
    : errors.push({ question: "Question is required" });
  req.body = cleanMission;
  errors.length > 0 ? next(errors) : next();
};
