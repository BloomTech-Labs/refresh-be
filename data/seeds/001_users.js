const faker = require('faker');
const bcrypt = require('bcrypt')
const HashFactor = 8

const createFakeUser = () =>({
  email: faker.internet.email(),
  password:  bcrypt.hashSync('roman', HashFactor)
})

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {

        const fakeUsers = []
        const userCount = 6

        for(let i = 0; i < userCount; i++){
          fakeUsers.push(createFakeUser())
        }
        // Inserts seed entries
        return knex('users').insert(fakeUsers);
      });
  };
  