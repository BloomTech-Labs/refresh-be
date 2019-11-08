const gitHubRouter = require("express").Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const jwt = require('./jwt');

//Config GitHub Auth
const gitId = process.env.GITHUB_CLIENT_ID;
const gitSecret = process.env.GITHUB_CLIENT_SECRET;
const gitRedirect = "https://apidevnow.com/gitAuth/return";

//Bring in the userModel
const User = require("../authModel");

//InitialIze PassPort
gitHubRouter.use(passport.initialize());

//Declare Strategy Vars
passport.use(
  new GitHubStrategy(
    {
      clientID: gitId,
      clientSecret: gitSecret,
      callbackURL: gitRedirect,
      session: false,
      scope: ['email']
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      User.findOrCreateByEmail(profile.emails[0].value)
      .then(res =>{
        console.log('addedOrReturnedYo',res)
        done(null, profile, accessToken)
      })
      
    }
  )
);

//GitLogin URL
gitHubRouter.get("/", passport.authenticate("github"));

//Github Call Back
gitHubRouter.get(
  "/return",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    console.log("req");
    //...So, not sure how to deal with escaping very well. R-J
    delete req.user._raw
    delete req.user._json
    const token = jwt.genToken(req.user.emails[0].value)
    const setToken = `
    <script>
      (function(){
        window.opener.postMessage('${JSON.stringify({...req.user,token})}',"*");
        window.close()
      })()
    </script>`
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(setToken))
  });

module.exports = gitHubRouter;
