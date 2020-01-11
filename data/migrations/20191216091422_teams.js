
exports.up = function(knex) {
  return knex.schema.createTable('teams', col => {
      col.increments()
      col.string('team_name')
      .notNullable()
      col.integer('team_lead')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('teams')
};
