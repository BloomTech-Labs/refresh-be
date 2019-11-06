//Bring In the Primary Middle-Ware
const express = require('express')
const helmet = require('helmet')
const chalk = require('chalk')
require('dotenv').config()

//Set Globalse
const PORT = process.env.PORT || 5000
const path = require('path')
global._dbConfig = path.resolve(__dirname + '/data/dbConfig')
global._jwt = path.resolve(__dirname + '/api/auth/preAuth/jwt')

//Bring in the Routes.. Always after Globals
const webHooks = require('./webHooks/webhooks')
const primaryRouter = require('./api/server')
const cors = require('cors')

//Initialize Passport for Auth Stratagies
const passport = require('passport');

//Configure the server
const server = express()
server.use(helmet()); https://client.apidevnow.com
server.use(cors())
server.use(express.json())

//Implement Routes
server.use('/webhooks',webHooks)
server.use('/',primaryRouter)

server.use('/',(req,res)=>{
    res.status(200).json({message:"Welcome All To Refresh Proto 1t"});
})
server.listen(PORT,()=>{
    console.log(`\n** It's Alive... on port: ${chalk.blue(PORT)} **\n`)
})
