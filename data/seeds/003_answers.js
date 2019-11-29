exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("answers")
  .del()
    .then(function() {
      
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      };

      function randomDate(start, end) {
        const date = new Date(
          
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
          
        );
        return date;
      }

      randomDate(new Date(2019, 10, 1), new Date(2019,12,12));

      const fakeAnswers = [];
      for (let i = 0; i < 200; i++) {
        fakeAnswers.push({
          answer: getRandomInt(1, 10),
          question_id: getRandomInt(11, 13),//Max Exclusive
          user_id: getRandomInt(1, 5),
          answer_date: randomDate(
            new Date(2019, 10, 15),
            new Date(2019, 12, 15)
          )
        });
      }
      // Inserts seed entries
      return knex("answers").insert(fakeAnswers);
    });
};
