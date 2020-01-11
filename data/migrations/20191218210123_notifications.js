
exports.up = function(knex) {
  return knex.schema.createTable('notifications',col=>{
      col.increments()
      col.integer('to_user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      col.integer('from_user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      col.string('message',250)
      .notNullable()
      col.timestamp('sent').defaultTo(knex.fn.now());
      col.dateTime('viewed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notifications')
};
