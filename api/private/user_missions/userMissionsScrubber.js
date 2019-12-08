module.exports = async (req, res, next) => {
  const errors = [];
  const user_missions = req.body;

  const cleaner = user_mission => {
    const cleanUserMission = {};
    const addProp = (prop, value) => {
      cleanUserMission[prop] = value;
    };

    !!user_mission.user_id
      ? addProp("user_id", user_mission.user_id)
      : errors.push({ user_id: "User ID is Required" });

    !!user_mission.mission_id
      ? addProp("mission_id", user_mission.mission_id)
      : errors.push({ mission_id: "Mission ID is Required" });

    return cleanUserMission;
  };

  req.body = cleaner(user_missions);

  errors.length > 0 ? next(errors) : next();
};
