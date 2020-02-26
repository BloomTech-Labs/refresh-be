
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('teams').insert([
        {id: 1, name: 'Accounting'},
        {id: 2, name: 'Developers'},
        {id: 3, name: 'Human Resource'}
    ]);
};
