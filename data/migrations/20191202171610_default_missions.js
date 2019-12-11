exports.up = function(knex) {
  return knex.schema.createTable("default_missions", col => {
    col.increments();
    col
      .integer("mission_id")
      .unique()
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("missions")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("default_missions");
};
