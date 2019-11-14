const publicRouter = require("express").Router();
const rolerRouter = require('./roles/roles')

publicRouter.use('/roles',rolerRouter)
module.exports = publicRouter;
