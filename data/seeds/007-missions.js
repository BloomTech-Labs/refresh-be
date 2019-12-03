
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('missions').del()
    .then(function () {
      // Inserts seed entries
      return knex('missions').insert([
        {vertical:'water',description:'more glasses of water',goal:"6",question:11,point_value:'20'},
        {vertical:'sleep',description:'more hours of sleep',goal:"6",question:12,point_value:'20'},
        {vertical:'activity',description:'more minutes of activity',goal:"30",question:13,point_value:'50'},
        {vertical:'mental',description:'more breaks for the day',goal:"5",question:14,point_value:'20'},
        {vertical:'social',description:'more minutes of social activity',goal:"60",question:15,point_value:'50'},
        {vertical:'food',description:'more fruits to eat for the day',goal:"3",question:16,point_value:'30'},
      ]);
    });
};
