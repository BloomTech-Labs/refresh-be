# Refresh

[![Maintainability](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/test_coverage)

#### Base URL https://lab23-refresh-be.herokuapp.com

## Endpoints

|Method| URL | Description| Requirements|
|:-----:|:-----|:-----|:-----|
|POST| /admin/login| ADMIN LOGIN| { "email": "admin2@gmail.com", "password: "admin" }|
|POST| /users/login| Log In as User | email , password|
|POST| /users/register| Register A New User | email, full name, password|
|PUT| /users/:id/metrics| Edit User's Metrics |water, exercise, sleep, breaks|
|GET| /users| get all users | |
|PUT|/users/:id | UPDATE user |email, password, full name |
|GET| /users/:id| get user by id |user id|
|GET| /teams| See List of All Teams  ||
|GET| /teams/:id| See Team by Id | team id|
|POST|/teams | POST to add a team | |
| DEL |/teams/:id | DELETE to delete a team by ID | |
| DEL |/users/:id | DELETE to delete a user by ID | |

## SAMPLE OBJECTS FOR HITTING ENDPOINTS
#### User Register
```
{
      	email: "example@gmail.com",
	full_name: "Example Name",
	password: "example123",
	avatar: null,
	points: 5,
	team_id: 1
}
```


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
