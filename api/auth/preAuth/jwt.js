const jwt = require("jsonwebtoken");
const catalogAgent = require("./catalogAgent");
const secret = process.env.JWT_SECRET;
const tokenTTL = process.env.TOKEN_TTL || "1d";
module.exports = {
  genToken,
  chkToken,
  chkRole
};

//Creates a new JWT Token
function genToken(user) {
  const { user_roles } = user;
  const { user_id } = user.user_profile;
  const payload = {
    tokenType: "Basic ",
    user_id,
    user_roles
  };

  const options = {
    expiresIn: tokenTTL
  };

  return jwt.sign(payload, secret, options);
}

//Checks Role
function chkRole(role) {
  return (req, res, next) => {
    let access = false;
    req.user.user_roles.forEach(userRole => {
      if (userRole.id === role) {
        access = true;
        next();
      }
    });
    !access &&
      next({ token: "Invalid Access, You do not have permission to be here" });
  };
}

//Verifies Existing Role and JWT token
function chkToken(routeCatalog) {
  return (req, res, next) => {
    

    //TOKEN
    const token = req.headers.authorization;

    token &&
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          //Making sure the route is in the routeCatalog
          catalogAgent(routeCatalog, req.url)
            ? next({ token: "Invalid or Missing Token, you will need to Login" })
            : next();
        } else {
          req.user = { ...decoded };
          next();
        }
      });
    //No Token, No Pass
    !token && next({ token: "No Token Provided, you will need to Login" });
  };
}
