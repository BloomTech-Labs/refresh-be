const primaryRouter = require("express").Router();
const axios = require("axios");

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
primaryRouter.use("/", jwt.chkToken(routeCatalog.Private_Routes), privateRouter);

//Auto Documentation Genorated from routeCatalog
primaryRouter.use("/docs", docs.docGen(routeCatalog), docsRouter);

//Used For Testing
primaryRouter.get("/testRoutes",async (req, res) => {
  
  const axiosCalls = [];

  Object.keys(routeCatalog).forEach(routeGroup => {
    routeCatalog[routeGroup].forEach( route => {
      axiosCalls.push(
        axios[route.method.toLowerCase()](`http://localhost:8080` + route.route)
      )
    });
  });

  const resolved = []
  await Promise.all(axiosCalls.map(p => p.then(res=>resolved.push(res.data)).catch(() => undefined)))
  
  res.json(resolved)
  
});



module.exports = primaryRouter;
