const googleRouter = require("express").Router();
const passport = require("passport");
const GitHubStrategy = require("passport-google-oauth").Strategy;
const jwt = require(_jwt)
//Config GitHub Auth
const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleRedirect = "https://refresh-yo.herokuapp.com/googleAuth/return";

//Bring in the userModel
const User = require("../authModel");

//InitialIze PassPort
googleRouter.use(passport.initialize());

//Declare Strategy Vars
passport.use(
  new GoogleStrategy(
    {
      clientID: googleId,
      clientSecret: googleSecret,
      callbackURL: googleRedirect,
      session: false
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      done(null, profile, accessToken);
    }
  )
);

//GitLogin URL
googleRouter.get("/", passport.authenticate("google"));

//Github Call Back
googleRouter.get(
  "/return",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
    scope: ['email']
  }),
  (req, res) => {
    console.log("req", req.user);
    //...So, not sure how to deal with escaping very well. R-J
    delete req.user._raw
    delete req.user._json.bio
    const setToken = `
    <script>
      (function(){
        window.opener.postMessage('${JSON.stringify(req.user)}', "*");
        window.close()
      })()
    </script>`
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(setToken))
  });

  googleRouter.get("/terms", (req,res) =>{
    res.status(200).json({message:'Pretty much, we use your email to create your account, if you want to disconnect from your registration median, select forgot password and you will be switched to our local auth stratagey. If you want to nuke your account, go to settings and click the nuke button. We will do our best to protect your data, however, where there is a will there is a way. That being said, we take zeor liablity for any data breaches. Your data may be used for internal and external purposes, but, mainly to improve our product for you.'});
  });

module.exports = googleRouter;
