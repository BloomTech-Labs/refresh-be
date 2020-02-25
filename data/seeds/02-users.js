const faker = require("faker");

const createFakeUser = () => ({
  email: faker.internet.email,
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  password: faker.internet.password,
  avatar: faker.internet.avatar,
  points: faker.random.number,
  team_id: null
})

exports.seed = async function(knex) {
      const fakeUsers = [];
      const desiredFakeUsers = 30;
      for(let i = 0; i < desiredFakeUsers; i++) {
        if(i < 10) {
          let addedTeamUser = createFakeUser()
          addedTeamUser.team_id = 1
          fakeUsers.push(addedTeamUser)
        } else if(i >= 10 && i < 20) {
          let addedTeamUser = createFakeUser()
          addedTeamUser.team_id = 2
          fakeUsers.push(addedTeamUser)
        } else {
          let addedTeamUser = createFakeUser()
          addedTeamUser.team_id = 3
          fakeUsers.push(addedTeamUser)
        }
      }
      await knex('users').insert(fakeUsers)
};
