const questionModel = require("../questions/questionsModel");
module.exports = async (req, res, next) => {
  const errors = [];
  const cleanMission = {};
  const mission = req.body
  //Create your Clean Object
  const addProp = (prop, value) => {
    cleanMission[prop] = value;
  };

  //Vertical
  !!mission.vertical
    ? addProp("vertical", mission.vertical)
    : errors.push({ vertical: "Vertical is Required" });

  //Description
  !!mission.description
    ? addProp("description", mission.description)
    : errors.push({ description: "Description is Required" });

  //Point Value
  !!mission.point_value
    ? addProp("point_value", mission.point_value)
    : errors.push({ point_value: "Point Value is required" });

  //Goal
  !!mission.goal
    ? addProp("goal", mission.goal)
    : errors.push({ goal: "Goal is required" });
    
  //Question
  mission.question = mission.question && (await questionModel.add({question:mission.question}));
  !!mission.question && Number(mission.question)
    ? addProp("question", mission.question)
    : errors.push({ question: "Question is required" })

  if (errors.length > 0) {
    next(errors);
  } else {
    req.body = cleanMission;
    next();
  }
};
