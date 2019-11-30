exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("question_groups")
    .del()
    .then(function() {
      // Sqlite 3 does not support Int[]
      const questions =
        
           [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          

      return knex("question_groups").insert([
        { group: "onboarding", question_ids: questions }
      ]);
    });
};
