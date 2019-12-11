const knex = require("knex");
const conf = require("../knexfile");
const env =
    process.env.NODE_ENV === "test" ?
    "test" :
    process.env.DB_ENV || "development";

module.exports = knex(conf[env]);