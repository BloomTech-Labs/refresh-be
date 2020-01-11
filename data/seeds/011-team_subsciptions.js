
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('team_subscriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_subscriptions').insert([
        {user_id:1,team_id:1 },
        {user_id:2,team_id:1 },
        {user_id:3,team_id:1 },
        {user_id:4,team_id:1 },
        {user_id:5,team_id:1 },
        {user_id:6,team_id:1 }
      ]);
    });
};
