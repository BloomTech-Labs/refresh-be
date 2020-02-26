const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const UserRouter = require('../users/users-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', UserRouter);

server.get('/', (req, res) => {
    res.send("Refresh Running")
});

module.exports = server;