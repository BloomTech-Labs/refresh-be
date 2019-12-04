module.exports = async (req, res, next) => {
    const errors = [];
    const profile = req.body;
  
    //Create your Clean Object
  
    const cleaner = profile => {
      const cleanProfile = {};
      const addProp = (prop, value) => {
        cleanProfile[prop] = value;
      };
  
      !!profile.display_name
        ? addProp("display_name", profile.display_name)
        : errors.push({ display_name: "Display name is Required" });
  
      // Avatar
      !!profile.avatar
        ? addProp("avatar", profile.avatar)
        : errors.push({ avatar: "Avatar is Required" });

      // First name
      !!profile.fname
        ? addProp("first_name", profile.fname)
        : errors.push({ fname: "First name is Required" });

      // Last name
      !!profile.lname
        ? addProp("last_name", profile.lname)
        : errors.push({ fname: "Last name is Required" });

      // Bio
      !!profile.bio 
        ? addProp("bio", profile.bio)
        : errors.push({ bio: "Bio is Required" });

      // Cohort
      !!profile.cohort
        ? addProp("cohort", profile.cohort)
        : errors.push({ cohort: "Cohort is Required" })

    // Section Lead
    !!profile.section_lead 
      ? addProp("section_lead", profile.section_lead) 
      : errors.push({ section_lead: "Section lead is Required" })
  
      //User ID
      !!req.user.user_id
        ? addProp("user_id", req.user.user_id)
        : errors.push({
            user_id: "User Id is Required, something is a bit shifty here..."
          });
  
      //return cleanObj
      return cleanProfile;
    };
  
    if (Array.isArray(profile)) {
      req.body = [];
      profile.forEach(p => {
        req.body.push(cleaner(p));
      });
    } else {
      //Answer
      req.body = cleaner(profile);
    }
  
    if (errors.length > 0) {
      next(errors);
    } else {
      next();
    }
  };
  