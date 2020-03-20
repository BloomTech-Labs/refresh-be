
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

            users.string('first_name').notNullable();

            users.string('last_name').notNullable();

            users.string('password').notNullable();

            users.string('avatar');

            users.integer('points');
                
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
