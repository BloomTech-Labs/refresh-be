
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('teams').insert([
        {id: 1, name: 'Accounting', points: 0},
        {id: 2, name: 'Developers', points: 0},
        {id: 3, name: 'Human Resource', points: 0}
    ]);
};
