const dbModel = require("../authModel");
module.exports = async (req, res, next) => {
  const errors = [];

  function validateNewUser(user) {
    //Check For Keys
    const u = user
    !u.email && errors.push({ email: "required" });
    !u.password && errors.push({ password: "required" });

    //Validate Char Length
    Object.keys(user).map(x => {
      if (x === "password" || x === "email") {
        const key = u[x].length;

        //Verifiy Length Min
        if (key < 5 && x) {
          errors.push({ [x]: "Must be a minimum of 5 chars" });
        }

        //Verifiy Length Max
        if (key > 50 && x) {
          errors.push({ [x]: "Must be a maximum of 50 chars" });
        }

        if (x === "email") {
          //Cats got your keyboard... When in dbout, RegEx it out
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u[x]) &&
            errors.push({[x]: "Unexpected Eamil Address" });
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
      .findByEmail(req.body.email)
      .then(
        user => user && errors.push({ email: "User Already Exists" })
      );
  }
  
  //OK We are probably safe to move on
  return errors.length < 1 ? next() : res.status(200).json({ errors });
};
