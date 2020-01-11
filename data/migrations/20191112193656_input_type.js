
exports.up = function(knex) {
  return knex.schema.createTable('input_type', col=>{
      col.increments()
      col.string('type')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('input_type')
};
