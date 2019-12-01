
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {user_id: 1, display_name: 'testuser0',avatar:"", fname:"test", lname:"user0",cohort:"web22-yo"},
        {user_id: 2, display_name: 'testuser1',avatar:"", fname:"test", lname:"user1",cohort:"web22-yo"},
        {user_id: 3, display_name: 'testuser2',avatar:"", fname:"test", lname:"user2",cohort:"web22-yo"},
        {user_id: 4, display_name: 'testuser3',avatar:"", fname:"test", lname:"user3",cohort:"web22-yo"},
        {user_id: 5, display_name: 'testuser4',avatar:"", fname:"test", lname:"user4",cohort:"web22-yo"},
        {user_id: 6, display_name: 'testuser5',avatar:"", fname:"test", lname:"user5",cohort:"web22-yo"}
      ]);
    });
};
