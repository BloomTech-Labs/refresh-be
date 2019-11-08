const dbModel = require('../authModel')

//If succesful, creates req.user
module.exports = async (req, res, next) => {
  const errors = [];
  const user = req.body

  function validateLogin(user) {
    const u = req.body;

    !u.email && errors.push({ email: "required" });
    !u.password && errors.push({ password: "required" });

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
      } else {
        //Why except dirty keys
        errors.push({ error: `Unexpected key: [${x}] provide` });
      }
    });
  }

  if(!errors.length){
    req.user = await dbModel.findByEmail(user.email)
  }

  validateLogin(user);
  errors.length < 1 ? next() : res.status(200).json({ errors });
};
