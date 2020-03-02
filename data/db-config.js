const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'production';

module.exports = knex(config[environment]);