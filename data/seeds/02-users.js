const faker = require("faker");

const createFakeUser = () => ({
  email: faker.internet.email,
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  password: faker.internet.password,
  avatar: faker.internet.avatar,
  points: faker.random.number,
  team_id: 2
})

exports.seed = async function(knex) {
      const fakeUsers = [];
      const desiredFakeUsers = 10;
      for(let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakeUser())
      }
      await knex('users').insert(fakeUsers)
};
