const primaryRouter = require("express").Router();

//Middleware
const jwt = require("./auth/preAuth/jwt");
const docs = require("./public/docs/docProcessor");

//Bring in the Routes
const publicRouter = require("./public/publicRouter");
const privateRouter = require("./private/privateRouter");
const docsRouter = require("./public/docs/docs");
const authRouter = require("./auth/auth");

//Global Route Catalog
const routeCatalog = {
  Authentication: [...authRouter.routes],
  Private_Routes: [...privateRouter.routes],
  Public_Routes: [...publicRouter.routes]
};

//Implement Routes
primaryRouter.use("/", authRouter);
primaryRouter.use("/", publicRouter);

//Auto Documentation Genorated from routeCatalog
primaryRouter.use("/docs", docs.docGen(routeCatalog), docsRouter);

//Used For Testing
primaryRouter.get("/testRoutes", (req, res) => {
  res.status(200).json(routeCatalog);
});

primaryRouter.use("/", jwt.chkToken(), privateRouter);

module.exports = primaryRouter;
