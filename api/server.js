const primaryRouter = require("express").Router();

//Middleware
const jwt = require("./auth/preAuth/jwt");
const docs = require("./public/docs/docProcessor");

//Bring in the Routes
const publicRouter = require("./public/publicRouter");
const privateRouter = require("./private/privateRouter");
const docsRouter = require("./public/docs/docs");

//Login, Register, GoogleAuth, FaceBookAuth, GitHubAuth
const authRouter = require("./auth/auth");

//Implement Routes
primaryRouter.use("/", authRouter);
primaryRouter.use("/", publicRouter);

primaryRouter.use(
  "/docs",
  docs.docGen({
    Authentication: [...authRouter.routes],
    Private_Routes: [...privateRouter.routes],
    Public_Routes: [...publicRouter.routes]
  }),
  docsRouter
);
primaryRouter.use("/", jwt.chkToken(), privateRouter);

module.exports = primaryRouter;
