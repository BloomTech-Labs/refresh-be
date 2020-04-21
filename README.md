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
|POST| /api/lists/:id/tasks| add task to a list |list id, task object|
|GET| /api/lists/today| get recurring tasks for current day|date object|
|GET| /api/lists/month| get recurring tasks for the current month |date object|
|GET| /api/lists/mylists| get all lists for a user |
|GET| /api/lists/:id/tasks| get all tasks for a list |list id|
|GET| /api/tasks/deleted| all deleted tasks |
|GET| /api/tasks/restore/:id| restores deleted task | task id|
|PUT| /api/lists/:id| edit a list name | list id, list object|
|PUT| /api/tasks/:id| edit a task | task id, updated task object|
|DELETE| /api/lists/:id| delete a list | list id|
|DELETE| /api/tasks/:id| delete a task | task id|

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
