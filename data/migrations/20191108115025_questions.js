exports.up = function(knex) {
  return knex.schema
    .createTable("questions", col => {
      col.increments();
      col.string("question", 500).notNullable();
      col.timestamp("creation_date").defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("questions");
};
