# Refresh

[![Maintainability](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/test_coverage)

#### Backend deployed at [Heroku](https://lab23-refresh-be.herokuapp.com/) <br>

## Endpoints

| Method | Endpoint | Explanation |
| :----: | :------: | :---------- |


| ADMIN LOGIN | /admin/login | { "email": "admin@gmail.com", "password: "admin" } |

| LOGIN | /users/login | { "email": "email@gmail.com, "password": "pass123" |

| REGISTER |/users/register | "email": "", "full_name": "", "password": "" |

| GET |/teams | GET to see all teams |

| GET |/teams/:id | GET to see the team where :id is team's id |

| GET |/users | GET to see the users |

| GET |/users/:id | GET to see the users by ID |

| POST |/teams | POST to add a team |

| POST |/users | POST to add a new user |

| PUT |/users/{id} | UPDATE user |

| PUT |/teams/{id} | UPDATE team |

| DEL |/teams/:id | DELETE to delete a team by ID |

| DEL |/users/:id | DELETE to delete a user by ID |

#### Implementation and Docs deployed at [REFRESH DOCS](https://refresh-yo.herokuapp.com/docs) <br>

Students and working professionals can experience tunnel vision when working towards an important goal, like labs, and this often leads to low energy, motivation, and sometimes complete burnout.

## Mission

Those in the tech industry are always looking for ways to optimize their output - Refresh looks to accelerate healthy habits by tracking key metrics in a way that makes things fresh and fun so that individuals can optimize their daily output and maintain a healthy lifestyle.

### Built With

- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Google APIs](https://developers.google.com/apis-explorer)
- [oAuth2](https://oauth.net/2/)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
