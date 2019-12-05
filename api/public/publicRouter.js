const publicRouter = require("express").Router();
const rolerRouter = require('./roles/roles')
const docsRouter = require('./docs/docs')


publicRouter.use('/roles',rolerRouter)

publicRouter.routes = [
    ...rolerRouter.routes
]

module.exports = publicRouter;
