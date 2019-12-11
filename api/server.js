const primaryRouter = require("express").Router();
const axios = require("axios");
const rootUrl =
  "https://" + process.env.ROOT_URL || "http://localhost:" + process.env.PORT;
//Middleware
const jwt = require("./auth/preAuth/jwt");
const docs = require("./public/docs/docProcessor");
const { routesToArray } = require("./auth/preAuth/catalogAgent");

//Bring in the Routes
const publicRouter = require("./public/publicRouter");
const privateRouter = require("./private/privateRouter");
const docsRouter = require("./public/docs/docs");
const authRouter = require("./auth/auth");

//Global Route Catalog
primaryRouter.routeCatalog = {
  Authentication: [...authRouter.routes],
  Private_Routes: [...privateRouter.routes],
  Public_Routes: [...publicRouter.routes]
};
const { routeCatalog } = primaryRouter;

//Implement Routes
primaryRouter.use("/", authRouter);
primaryRouter.use("/", publicRouter);
primaryRouter.use(
  "/",
  jwt.chkToken(routeCatalog.Private_Routes),
  privateRouter
);

//Auto Documentation Genorated from routeCatalog
primaryRouter.use("/docs", docs.docGen(routeCatalog), docsRouter);

//Used For Testing
primaryRouter.get("/testRoutes", async (req, res) => {
  const axiosCalls = [];
  const routes = routesToArray(routeCatalog);
  
  routes.forEach(route => {
    axiosCalls.push(axios[route.method.toLowerCase()](rootUrl + route.route));
  });

  const resolved = [];
  await Promise.all(
    axiosCalls.map((p,i) =>
      p.then(res => resolved.push({ ...res.data,...routes[i]})).catch(() => undefined)
    )
  );

  res.json(resolved);
});

module.exports = primaryRouter;
