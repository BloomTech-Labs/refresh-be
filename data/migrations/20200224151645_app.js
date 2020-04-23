
exports.up = function(knex) {
    return knex.schema
        .createTable('teams', teams => {
            teams.increments();

            teams.string('name').unique().notNullable();
            teams.integer('points');

    })

        .createTable('users', users => {
            users.increments();
            users.string('email').unique().notNullable();
            users.string('full_name').notNullable();
            users.string('password').notNullable();
            users.string('avatar');
            users.integer('total_points').defaultTo(0);
            users.integer('daily_points').defaultTo(0);
            users.boolean('admin').defaultTo(false)

            // Metrics
          
            users.integer('exercise').defaultTo(0);
            users.integer('breaks').defaultTo(0);
            users.integer('sleep').defaultTo(0);
            users.integer('water').defaultTo(0);
            // Forigen Key
            users
                .integer('team_id')
                .unsigned()
                .references('id')
                .inTable('teams')
                .onDelete('SET NULL')
                .onUpdate('CASCADE');
              

        })
    


};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('teams')
};
