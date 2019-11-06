exports.up = function(knex) {
  return knex.schema.createTable("users", col => {
    col.increments();
    col
      .string("username", 50)
      .unique()
      .notNullable();
    col
      .string("password", 128)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
