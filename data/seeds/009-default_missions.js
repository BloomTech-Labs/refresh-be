
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('default_missions').del()
    .then(function () {
      // Inserts seed entries
      return knex('default_missions').insert([
        {mission_id: 1},
        {mission_id: 2},
        {mission_id: 3},
        {mission_id: 4},
        {mission_id: 5},
        {mission_id: 6}
      ]);
    });
};
