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
      delete profile._raw
      User.findOrCreateByEmail(profile._json)
      .then(res =>{
        done(null, {...res,...profile}, accessToken)
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
    //...So, not sure how to deal with escaping very well. R-J
  
    const token = jwt.genToken(req.user)
    const id = Date.now()
    const setToken = `
    <script >
        window.opener.postMessage('${JSON.stringify({...req.user,token})}',"*");
        window.close()
    </script>`
    res.set('Content-Type', 'text/html');
    res.send(setToken)
  })

module.exports = gitHubRouter;
