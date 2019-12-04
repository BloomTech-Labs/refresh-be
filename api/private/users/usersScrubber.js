module.exports = async (req, res, next) => {
    const errors = [];
    const users = req.body;
  
    //Create your Clean Object
  
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

    if (Array.isArray(users)) {
        req.body = [];
        users.forEach(u => {
          req.body.push(cleaner(u));
        });
      } else {
        //Answer
        req.body = cleaner(users);
      }
    
      if (errors.length > 0) {
        next(errors);
      } else {
        next();
      }
}