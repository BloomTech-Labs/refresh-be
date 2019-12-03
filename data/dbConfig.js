const knex = require('knex')
const conf = require('../knexfile')
const env = process.env.DB_ENV || 'development'

module.exports=knex(conf[env])