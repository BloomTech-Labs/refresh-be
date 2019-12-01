const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  const clean = await cleaner.clean(knex, {
    mode: "truncate",
    restartIdentity: true,
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  });

  return clean;
};
