
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('admin').insert([
        {email: 'admin@gmail.com', password: 'admin'},
    ]);
};
