const privateRouter = require('express').Router()
const mailRouter = require('./mailer/sendMail')


privateRouter.use('/mailerYo',mailRouter)
module.exports=privateRouter