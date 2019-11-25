
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('question_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('question_groups').insert([
        {group: 'onboarding', question_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
       
      ]);
    });
};

