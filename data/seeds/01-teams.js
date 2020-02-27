
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('teams').insert([
        {name: 'Accounting', points: '0'},
        {name: 'Developers', points: '0'},
        {name: 'Human Resource', points: '0'}
    ]);
};
