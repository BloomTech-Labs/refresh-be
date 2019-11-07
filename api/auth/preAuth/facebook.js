const facebookRouter = require("express").Router();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const jwt = require('./jwt');

//Config facebook Auth
const fbId = process.env.FACEBOOK_APP_ID;
const fbSecret = process.env.FACEBOOK_CLIENT_SECRET;
const fbRedirect = "https://apidevnow.com/facebookAuth/return";

//Bring in the userModel
const User = require("../authModel");

//InitialIze PassPort
facebookRouter.use(passport.initialize());
//Declare Strategy Vars
passport.use(
  new FacebookStrategy(
    {
      clientID: fbId,
      clientSecret: fbSecret,
      callbackURL: fbRedirect,
      profileFields: ['id', 'displayName', 'name', 'photos', 'email'],
      enableProof: true
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      done(null, profile, accessToken);
    }
  )
);

//Facebook Login URL
facebookRouter.get("/", passport.authenticate("facebook",{scope: ['email', 'public_profile']}));

//facebook Call Back
facebookRouter.get("/return",
  passport.authenticate("facebook", {failureRedirect: "/login",session:false }),
  (req, res) => {
    console.log("req");
    delete req.user._raw
    const token = jwt.genToken(req.user.emails[0].value)
    const setToken = `
    <script>
      (function(){
        window.opener.postMessage('${JSON.stringify({...req.user,token})}', "*");
        window.close()
      })()
    </script>`
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(setToken))
  })

  facebookRouter.get("/terms", (req,res) =>{
    res.status(200).json({message:'Pretty much, we use your email to create your account, if you want to disconnect from your registration median, select forgot password and you will be switched to our local auth stratagey. If you want to nuke your account, go to settings and click the nuke button. We will do our best to protect your data, however, where there is a will there is a way. That being said, we take zeor liablity for any data breaches. Your data may be used for internal and external purposes, but, mainly to improve our product for you.'});
  });

module.exports = facebookRouter;
