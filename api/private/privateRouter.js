const privateRouter = require("express").Router();
const mailRouter = require("./mailer/sendMail");
const adminRouter = require("./admin/admin");
const userRouter = require("./users/users");
const questionsRouter = require("./questions/questions");
const profileRouter = require("./profile/profile");
const missionRouter = require("./missions/missions");

const jwt = require(_jwt);

privateRouter.use("/mailerYo", mailRouter);
privateRouter.use("/admin", jwt.chkRole(), adminRouter);
privateRouter.use("/users", userRouter);
privateRouter.use("/questions", questionsRouter);
privateRouter.use("/profile", profileRouter);
privateRouter.use("/missions", missionRouter);

module.exports = privateRouter;
