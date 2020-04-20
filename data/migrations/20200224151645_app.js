
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
            users.integer('points');
            users.boolean('admin').defaultTo(false)

            // Metrics
            users.integer('water');
            users.integer('exercise');
            users.integer('breaks');
            users.integer('sleep');
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
