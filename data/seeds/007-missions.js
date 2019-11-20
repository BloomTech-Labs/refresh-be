
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('missions').del()
    .then(function () {
      // Inserts seed entries
      return knex('missions').insert([
        {vertical:'water',description:'more glasses of water',goal:"6",question:11,point_value:'20'},
        {vertical:'sleep',description:'more hours of sleep',goal:"6",question:12,point_value:'20'},
      ]);
    });
};
