
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: 'How much do you weigh?', objkey: "weight" },
        {question: 'question string here 2'},
        {question: 'question string here 3'}
      ]);
    });
};
