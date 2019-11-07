const gitHubRouter = require("express").Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const jwt = require(_jwt)
//Config GitHub Auth
const gitId = process.env.GITHUB_CLIENT_ID;
const gitSecret = process.env.GITHUB_CLIENT_SECRET;
const gitRedirect = "https://refresh-yo.herokuapp.com/gitAuth/return";

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
      session: false
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      done(null, profile, accessToken);
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

module.exports = gitHubRouter;
