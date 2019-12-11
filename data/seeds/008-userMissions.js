exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_missions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_missions").insert([
        { user_id: 1, mission_id: 1 },
        { user_id: 1, mission_id: 2 },
        { user_id: 1, mission_id: 3 },
        { user_id: 1, mission_id: 4 },
        { user_id: 1, mission_id: 5 },
        { user_id: 1, mission_id: 6 },
        //User 2
        { user_id: 2, mission_id: 1 },
        { user_id: 2, mission_id: 2 },
        { user_id: 2, mission_id: 3 },
        { user_id: 2, mission_id: 4 },
        { user_id: 2, mission_id: 5 },
        { user_id: 2, mission_id: 6 },
        //User 3
        { user_id: 3, mission_id: 1 },
        { user_id: 3, mission_id: 2 },
        { user_id: 3, mission_id: 3 },
        { user_id: 3, mission_id: 4 },
        { user_id: 3, mission_id: 5 },
        { user_id: 3, mission_id: 6 },
        //User 4
        { user_id: 4, mission_id: 1 },
        { user_id: 4, mission_id: 2 },
        { user_id: 4, mission_id: 3 },
        { user_id: 4, mission_id: 4 },
        { user_id: 4, mission_id: 5 },
        { user_id: 4, mission_id: 6 },
        //User 5
        { user_id: 5, mission_id: 1 },
        { user_id: 5, mission_id: 2 },
        { user_id: 5, mission_id: 3 },
        { user_id: 5, mission_id: 4 },
        { user_id: 5, mission_id: 5 },
        { user_id: 5, mission_id: 6 },
      ]);
    });
};
