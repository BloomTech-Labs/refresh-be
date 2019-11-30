exports.seed = function(knex) {
  return knex("question_groups")
    .del()
    .then(function() {
      // Sqlite 3 does not support Int[]
      const questions = process.env.NODE_ENV === "test"
        ? "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          

      return knex("question_groups").insert([
        { group: "onboarding", question_ids: questions }
      ]);
    });
};
