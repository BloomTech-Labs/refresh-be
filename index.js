//Bring In the Primary Middle-Ware
const express = require("express");
const helmet = require("helmet");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();

//Set Globalse
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || process.env.DB_ENV;
const path = require("path");
global._dbConfig = path.resolve(__dirname + "/data/dbConfig");
global._jwt = path.resolve(__dirname + "/api/auth/preAuth/jwt");
global._URL = process.env.ROOT_URL || "localhost:" + PORT;

//Bring in the Routes.. Always after Globals
const webHooks = require("./webHooks/webhooks");
const primaryRouter = require("./api/server");

//Configure the server
const server = express();
server.set("view engine", "ejs"); //Used for .render() method in Docs
server.use(helmet()); //https://client.apidevnow.com
server.use(cors());
server.use(express.json());

//Declares a global static request route, critical for ejs and views
server.use("/css", express.static(__dirname + "/views/css")); //CSS

//Implement Routes
server.use("/webhooks", webHooks);
server.use("/", primaryRouter);

//Default Error handler
server.use("/", (error, req, res, next) => {
  if (error) {
    res.status(200).json({ errors: error });
  } else {
    next();
  }
});

//Final End Point, if all else fails, land here...
server.use("/", (req, res) => {
  const rootURL = process.env.ROOT_URL || "apidevnow.com";
  const routeId = req.originalUrl.split('/')
  console.log('routeId',routeId)
  res.status(200).json({
    errors: [
      {
        invalid: `https://${rootURL + req.originalUrl}, using method ${
          req.method
        }, is not a valid URL`
      },
      { docs: `https://${rootURL}/docs#${routeId[1]}` }
    ]
  });
});

//A bit hackey, Need for Travis and some 
//sqlite to pg conversions pertaing to int[]
if (ENV === "test") {
} else {
  server.listen(PORT, () => {
    console.log(
      `\n** It's Alive... on port: ${chalk.blue(
        PORT
      )} ** \n** Using Environment: ${chalk.blue(ENV.toUpperCase())}  **\n`
    );
  });
}

module.exports = server;
