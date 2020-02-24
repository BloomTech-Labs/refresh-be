
exports.up = function(knex) {
    return knex.schema.createTable('admin', admin => {
        admin.increments();

        admin.string('email').unique().notNullable();

        admin.string('password').unique().notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('admin');
};
