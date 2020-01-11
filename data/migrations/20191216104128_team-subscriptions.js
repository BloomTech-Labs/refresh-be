exports.up = function(knex) {
    return knex.schema.createTable('team_subscriptions', col => {
        col.increments()
        .notNullable()
        col.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
        col.integer('team_id')
        .unsigned()
        .references('id')
        .inTable('teams')
        .notNullable()
        col.unique(['user_id','team_id'])
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('team_subscriptions')
  };
  