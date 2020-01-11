
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('input_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('input_type').insert([
        {id: 1, type: 'slider'},
        {id: 2, type: 'counter'}
      ]);
    });
};
