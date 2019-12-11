module.exports = async (req, res, next) => {
  const errors = [];
  const users = req.body;
  const cleaner = user => {
    const cleanUser = {};
    const addProp = (prop, value) => {
      cleanUser[prop] = value;
    };
    !!user.email
      ? addProp("email", user.email)
      : errors.push({ email: "Email is Required" });
    !!user.password
      ? addProp("password", user.password)
      : errors.push({ password: "Password is Required" });
    return cleanUser;
  };
    req.body = cleaner(users);
    errors.length > 0 ? next(errors) : next();
};
