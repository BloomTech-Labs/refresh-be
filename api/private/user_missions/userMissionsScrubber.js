module.exports = async (req, res, next) => {
    const errors = [];
    const user_missions = req.body;
  
    //Create your Clean Object
  
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

    if (Array.isArray(user_missions)) {
        req.body = [];
        user_missions.forEach(um => {
          req.body.push(cleaner(um));
        });
      } else {
        req.body = cleaner(user_missions);
      }
    
      if (errors.length > 0) {
        next(errors);
      } else {
        next();
      }
}