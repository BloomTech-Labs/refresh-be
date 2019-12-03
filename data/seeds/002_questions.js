
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('questions').del()
      .then(function () {
        // Inserts seed entries
        return knex('questions').insert([
            {question: "What do you currently weigh?"},
            {question: "How tall are you?"},
            {question: "How often do you feel overwhelmed?"},
            {question: "How many times did you sleep over 6 hours this week?"},
            {question: "How many times this past week did you take proper Zoom meeting breaks as a team?"},
            {question: "How many times did you exercise for at least 30 minutes this past week?"},
            {question: "How many times did you drink at least 8 glasses of water in a day this past week?"},
            {question: "How many times did you incorporate a fruit or vegetable into your day this past week?"},
            {question: "How many times this past week did you do desk stretches?"},
            {question: "How many times have you met with your teammates this past week to play a game or chat?"},
            {question: "How many glasses did you drink?"},
            {question: "How many hours did you sleep for?"},
            {question: "How many minutes were you active for?"},
            {question: "How many breaks did you take today?"},
            {question: "How many minutes of social activity did you spend?"},
            {question: "How fruits did you eat today?"}
   
        ]);
      });
  };
  

 


 