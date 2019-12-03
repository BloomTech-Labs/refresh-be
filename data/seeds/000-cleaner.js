  
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'delete',
    restartIdentity: true,
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });
};