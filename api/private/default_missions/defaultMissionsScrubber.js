module.exports = async (req, res, next) => {
    const errors = [];
    const default_missions = req.body;
  
    //Create your Clean Object
  
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

    if (Array.isArray(default_missions)) {
        req.body = [];
        default_missions.forEach(dm => {
          req.body.push(cleaner(dm));
        });
      } else {
        req.body = cleaner(default_missions);
      }
    
      if (errors.length > 0) {
        next(errors);
      } else {
        next();
      }
}