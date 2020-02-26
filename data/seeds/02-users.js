exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('users').insert([
        {
          email: 'michael@gmail.com',
          first_name: 'Michael',
          last_name: 'Scott',
          password: 'mike123',
          avatar: null,
          points: 5,
          team_id: 1
        },
        {
          email: 'jan@gmail.com',
          first_name: 'Jan',
          last_name: 'Levins',
          password: 'jan123',
          avatar: null,
          points: 10,
          team_id: 1
        },
        {
          email: 'dwight@gmail.com',
          first_name: 'Dwight',
          last_name: 'Schrute',
          password: 'dwight123',
          avatar: null,
          points: 8,
          team_id: 1
        },
        {
          email: 'jim@gmail.com',
          first_name: 'Jim',
          last_name: 'Halpert',
          password: 'jim123',
          avatar: null,
          points: 2,
          team_id: 2
        },
        {
          email: 'pam@gmail.com',
          first_name: 'Pam',
          last_name: 'Beasley',
          password: 'pam123',
          avatar: null,
          points: 7,
          team_id: 2
        },
        {
          email: 'david@gmail.com',
          first_name: 'David',
          last_name: 'Powers',
          password: 'david123',
          avatar: null,
          points: 8,
          team_id: 2
        },
        {
          email: 'miguel@gmail.com',
          first_name: 'Miguel',
          last_name: 'Martinez',
          password: 'miguel123',
          avatar: null,
          points: 9,
          team_id: 3
        },
        {
          email: 'damien@gmail.com',
          first_name: 'Damien',
          last_name: 'Johnson',
          password: 'damien123',
          avatar: null,
          points: 10,
          team_id: 3
        },
        {
          email: 'robert@gmail.com',
          first_name: 'Robert',
          last_name: 'Lee',
          password: 'robert123',
          avatar: null,
          points: 15,
          team_id: 3
        },
        {
          email: 'samantha@gmail.com',
          first_name: 'Samantha',
          last_name: 'Jones',
          password: 'samantha123',
          avatar: null,
          points: 16,
          team_id: 3
        }
    ]);
};
