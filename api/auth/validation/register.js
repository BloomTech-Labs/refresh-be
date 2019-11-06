const dbModel = require("../authModel");
module.exports = async (req, res, next) => {
  const errors = [];

  function validateNewUser(user) {
    //Check For Keys
    const u = user
    !u.username && errors.push({ username: "required" });
    !u.password && errors.push({ password: "required" });

    //Validate Char Length
    Object.keys(user).map(x => {
      if (x === "password" || x === "username") {
        const key = u[x].length;

        //Verifiy Length Min
        if (key < 5 && x) {
          errors.push({ [x]: "Must be a minimum of 5 chars" });
        }

        //Verifiy Length Max
        if (key > 50 && x) {
          errors.push({ [x]: "Must be a maximum of 50 chars" });
        }
      } else {
        //Why except dirty keys
        errors.push({ error: `Unexpected key: [${x}] provide` });
      }
    });
  }
  //Invoke the above function
  validateNewUser(req.body);
  //Does the user exist?
  if (!errors.length) {
    await dbModel
      .findByName(req.body.username)
      .then(
        user => user && errors.push({ username: "Username Already Exists" })
      );
  }
  //OK We are probably safe to move on
  errors.length < 1 ? next() : res.status(401).json({ errors: errors });
};
