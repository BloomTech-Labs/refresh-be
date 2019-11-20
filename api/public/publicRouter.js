const publicRouter = require("express").Router();
const rolerRouter = require('./roles/roles')
const docsRouter = require('./docs/docs')

publicRouter.use('/docs',docsRouter)
publicRouter.use('/roles',rolerRouter)

module.exports = publicRouter;
