exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {email: "email@MediaList.com", password: "password"},
          {email: "email@testmail.com", password: "password"},
   
        ]);
      });
  };
  