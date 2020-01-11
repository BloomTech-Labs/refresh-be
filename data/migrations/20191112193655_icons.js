
exports.up = function(knex) {
  return knex.schema.createTable("icons",col=>{
      col.increments()
      col.string('icon')
      .notNullable()
      .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('icons')
};
