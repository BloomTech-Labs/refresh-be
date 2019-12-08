module.exports = async (req, res, next) => {
  const errors = [];
  const default_missions = req.body;

  const cleaner = default_mission => {
    const cleanDefaultMission = {};
    const addProp = (prop, value) => {
      cleanDefaultMission[prop] = value;
    };
    !!default_mission.mission_id
      ? addProp("mission_id", default_mission.mission_id)
      : errors.push({ mission_id: "Mission ID is Required" });
    return cleanDefaultMission;
  };
  req.body = cleaner(default_missions);
  errors.length > 0 ? next(errors) : next();
};
