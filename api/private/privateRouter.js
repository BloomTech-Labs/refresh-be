const privateRouter = require("express").Router();
const mailRouter = require("./mailer/sendMail");
const adminRouter = require("./admin/admin");
const answersRouter = require("./answers/answers")
const userRouter = require("./users/users");
const questionsRouter = require("./questions/questions");
const profileRouter = require("./profile/profile");
const missionRouter = require("./missions/missions");
const questionGroupsRouter = require("./questionsgroups/questionsGroups")
const userMissionsRouter = require('./user_missions/userMissions')
const testRouter = require('./testdoc/test')

const jwt = require(_jwt);

//all routes https://apidevnow.com/<route>    
privateRouter.use("/admin",jwt.chkRole(1), adminRouter);
privateRouter.use('/answers',answersRouter)
privateRouter.use("/mailerYo", mailRouter);
privateRouter.use("/missions", missionRouter);
privateRouter.use("/profile", profileRouter);
privateRouter.use("/users", userRouter);
privateRouter.use("/questions", questionsRouter);
privateRouter.use("/questiongroups", questionGroupsRouter)
privateRouter.use("/usermissions", userMissionsRouter)
privateRouter.use("/test", testRouter)

//Used For Documentation and Testing
privateRouter.routes = [
    ...adminRouter.routes,
    ...answersRouter.routes,
    ...missionRouter.routes,
    ...profileRouter.routes,
    ...userRouter.routes,
    ...questionsRouter.routes,
    ...questionGroupsRouter.routes,
    ...userMissionsRouter.routes,
    ...testRouter.routes
  ]

module.exports = privateRouter;
