
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {type: 'Category 1'},
        {type: 'Category 2'},
        {type: 'Category 3'}
      ]);
    });
};
