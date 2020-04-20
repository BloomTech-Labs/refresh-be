
exports.up = function(knex) {
    return knex.schema
        .createTable('teams', teams => {
            teams.increments();

            teams.string('name').unique().notNullable();

            teams.integer('points');

    })

    .createTable('metrics', metrics=>{
        metrics.increments();
        metrics.integer('water');
        metrics.integer('exercise');
        metrics.integer('breaks');
        metrics.integer('sleep');
   

    })

        .createTable('users', users => {
            users.increments();

            users.string('email').unique().notNullable();
            users.string('first_name').notNullable();
            users.string('last_name').notNullable();
            users.string('password').notNullable();
            users.string('avatar');
            users.integer('points');
            users.boolean('admin');
            
            users
                .integer('team_id')
                .unsigned()
                .references('id')
                .inTable('teams')
                .onDelete('SET NULL')
                .onUpdate('CASCADE');
              users
                
                .integer('metrics_id')
                .unsigned()
                .references('id')
                .inTable('metrics')
                .onDelete('SET NULL')
                .onUpdate('CASCADE');


        })
    

    

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('metrics')
        .dropTableIfExists('teams')
};
