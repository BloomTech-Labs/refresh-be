
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {team_name:'spider_monkeys', team_lead:1},
        {team_name:'griffendores', team_lead:2},
        {team_name:'Cupcakes', team_lead:3},
        {team_name:'HarryPotters', team_lead:4},
        {team_name:'The Ned Flanders', team_lead:5},
        {team_name:'Mad Max',team_lead:6}
      ]);
    });
};

