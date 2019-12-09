module.exports = async (req, res, next) => {
  const errors = [];
  const profile = req.body;

  const cleaner = profile => {
    const cleanProfile = {};
    const addProp = (prop, value) => {
      cleanProfile[prop] = value;
    };
    !!profile.display_name
      ? addProp("display_name", profile.display_name)
      : errors.push({ display_name: "Display name is Required" });
    !!profile.avatar
      ? addProp("avatar", profile.avatar)
      : errors.push({ avatar: "Avatar is Required" });
    !!profile.fname
      ? addProp("first_name", profile.fname)
      : errors.push({ fname: "First name is Required" });
    !!profile.lname
      ? addProp("last_name", profile.lname)
      : errors.push({ fname: "Last name is Required" });
    !!profile.bio
      ? addProp("bio", profile.bio)
      : errors.push({ bio: "Bio is Required" });
    !!profile.cohort
      ? addProp("cohort", profile.cohort)
      : errors.push({ cohort: "Cohort is Required" });
    !!profile.section_lead
      ? addProp("section_lead", profile.section_lead)
      : errors.push({ section_lead: "Section lead is Required" });
    !!req.user.user_id
      ? addProp("user_id", req.user.user_id)
      : errors.push({
          user_id: "User Id is Required, something is a bit shifty here..."
        });
    return cleanProfile;
  };
  req.body = cleaner(profile);
  errors.length > 0 ? next(errors) : next();
};
