const authRouter = require("express").Router();

//Authenication Stratagies
const jwt = require(_jwt);
//const gitAuth = require("./preAuth/github");
const facebookAuth = require("./preAuth/facebook");
const googleAuth = require("./preAuth/google")
//database Model
const dbModel = require("./authModel");
//Encryption Authentication
const bcrypt = require("bcrypt");
const HashFactor = parseInt(process.env.HASH) || 10;

//User Input Validation
const validateNewUser = require("./validation/register");
const validateLogin = require("./validation/login");

//Maybe one Wan'ts to register with Github, Facebook, or, Google
//authRouter.use("/gitAuth", gitAuth);
authRouter.use("/facebookAuth", facebookAuth);
authRouter.use("/googleAuth",googleAuth)



//Register ->Requires{username:'',password:''}
authRouter.post("/register", validateNewUser, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, HashFactor);
  user.password = hash;
  dbModel
    .findOrCreateByEmail(user)
    .then(newUser => {
      payload = {
        ...newUser,
        token_type: "Basic ",
        token: jwt.genToken(newUser)
      };
     
      res.status(201).send({ message: "Welcome da Club Yo!", ...payload });
    })
    .catch(err => res.status(400).json({ errors: err }));
});

//Register ->Requires{username:'',password:''}
authRouter.post("/login", validateLogin, async (req, res) => {
  const { password } = req.body;
  let user = req.user;
  
  if (user && bcrypt.compareSync(password, user.password)) {
    user = await dbModel.findOrCreateByEmail(user)
    delete user.password;
   
    payload = {
      ...user,
      token_type: "Basic ",
      token: jwt.genToken(user)
    };
    res.status(200).json({ message: "Login Success", ...payload });
  } else {
    res
      .status(401)
      .json({ errors: [{ password: "Invalid Username Or Password" }] });
  }
});

//Register ->Requires{username:'',password:''}
authRouter
  .delete('/deleteme',jwt.chkToken(),(req,res)=>{
    const id=req.user.user_id
    return dbModel.removeUser(id)
    .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(401).json({message:'SOMEMESSAGE', ...e})})
})

authRouter.routes = [
  {route:'/facebookAuth', method:"GET", expects:{}, returns:{}},
  {route:'/googleAuth' , method:"GET", expects:{}, returns:{}},
  {route:'/register' , method:"POST", expects:{}, returns:{}},
  {route:'/login' , method:"POST", expects:{}, returns:{}},
  {route:'/deleteme' , method:"DELETE", expects:{}, returns:{}}
]

module.exports = authRouter;
