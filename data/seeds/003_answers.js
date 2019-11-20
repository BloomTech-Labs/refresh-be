
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {answer: 2, question_id: 2, user_id: 2, answer_date: '2019-11-19T20:15:36.399Z'},
        {answer: 2, question_id: 2, user_id: 2, answer_date: '2019-11-19T20:15:36.399Z'},
        {answer: 2, question_id: 2, user_id: 2, answer_date: '2019-11-19T20:15:36.399Z'}
      ]);
    });
};
