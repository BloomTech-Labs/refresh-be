
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_missions').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_missions').insert([
        {user_id: 1, mission_id: 1},
        {user_id: 2, mission_id: 2},
        {user_id: 2, mission_id: 1},
        {user_id: 1, mission_id: 2},
      ]);
    });
};
