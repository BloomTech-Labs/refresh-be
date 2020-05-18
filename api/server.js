const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Routers
const UserRouter = require('../users/users-router');
const TeamRouter = require('../teams/teams-router');
const AdminRouter = require('../admin/admin-router');
const MetricsRouter = require('../metrics/metrics-router');


// Node-Schedule 
const db = require('../data/db-config');
const schedule = require('node-schedule');



server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/users', UserRouter);
server.use('/teams', TeamRouter);

server.use('/admin', AdminRouter);
server.use('/metrics',MetricsRouter);

server.get('/', (req, res) => {
    res.send("Refresh Running")
});



schedule.scheduleJob('0 0 4 * * *',
  function (fireDate) {
    console.log(`fireDate: ${fireDate}`);
    console.log(`now: ${new Date()}`);
    resetUserData()
      .then(result => {
        console.log(`data removed at ${new Date()}`);
        console.log('result:\n', result);
      })
      .catch(reason => {
        console.error(`removing data failed at ${new Date()}`);
        console.error(`reason: ${reason}`);
      });
  });
module.exports = server;

function resetUserData(){
  return db('users')
    .update({
      daily_points:0,
      water:0,
      breaks:0,
      exercise:0,
      sleep:0,
    })
    }

