# Refresh

[![Maintainability](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dd40d979822303c26785/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/refresh-be/test_coverage)

### For Future Developers
The Back-End uses Postgres as it's database, since the DB sits outside vscode you will need a way to connect to the DB from VsCode. 

#### Downloading Postgres

1) Download Postgres https://www.postgresql.org/ (it will install pgAdmin4) (the default port is 5432)(username is defaulted to "postgres", REMEMBER THE PASSWORD YOU SET)
2) Open pgAdmin4 on your computer. pgAdmin4 will ask for a master password, this is the password you set when creating an account in the installer
3) Top Left Click "Servers()", pgAdmin4 will most likely ask for another password, which should be the one you made during the installer
4) After you click on Servers you'll see that the default database is called "postgres"
5) If you click on Schemas at the bottom you can see any schemas you migrated

#### Connecting to your DataBase from VsCode
1) install dotenv and create a .env file, make sure it sits at the root level. 
2) Look inside the knexfile.js. You'll notice that under development the connection is set to an environment variable. We need to define that variable in order to connect to our Database
3) inside your env file add this <br/> DATABASE_URL="postgres://${POSTGRES_USR}:${POSTGRES_PWD}@postgres:5432/${POSTGRES_DB}<br/>
 <br/>POSTGRES_USR is the username pgadmin4 defaults too. which is the username "postgres"<br/>
 	POSTGRES_PWD is the password you set during the installer.<br/>
 	@postgres:5432 is the default port. if you changed the port inside the installer change it here as well.<br/>
 	POSTGRES_DB is your database name inside pgAdmin4, the default DB is named "postgres" if you made your own database, change it to that name.
4) at the end it should look like this    
   DATABASE_URL = postgres://postgres:mypasswordhere@localhost:5432/myDataBaseNameHere
5) test it out by running a knex migrate:latest inside vscode. 

#### Base url https://lab23-refresh-be.herokuapp.com

## User Endpoints

|Method| URL | Description| Requirements|
|:-----:|:-----|:-----|:-----|
|POST| /users/login| Log In as User | email , password|
|POST| /users/register| Register A New User | email, full name, password|
|GET| /users/:id/metrics| See User's Metrics ||
|PUT| /users/:id/metrics| Edit User's Metrics |water, exercise, sleep, breaks|
|GET| /users| get all users | |
|PUT|/users/:id | UPDATE user |email, password, full name |
|GET| /users/:id| get user by id |user id|
|GET| /teams| See List of All Teams  ||
|GET| /teams/:id| See Team by Id | team id|
|POST|/teams | POST to add a team | |
|DEL|/teams/:id | DELETE to delete a team by ID | |
|DEL|/users/:id | DELETE to delete a user by ID | |

## Admin endpoints 
|Method| URL | Description| Requirements|
|:-----:|:-----|:-----|:-----|
|POST| /admin/register| ADMIN REGISTER| { "email": "admin2@gmail.com", "password: "admin" }|
|POST| /admin/login| ADMIN LOGIN| { "email": "admin2@gmail.com", "password: "admin" }|

## SAMPLE OBJECTS FOR HITTING ENDPOINTS
#### Admin Login
```
{
      	email: "example@gmail.com",
	password: "example123",
	
}
```
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
#### User Login
```
{
      	email: "example@gmail.com",
	password: "example123",
	
}
```
#### User Metrics 
```
{
  
    "water": 123,
    "exercise": 123,
    "breaks": 1234,
    "sleep": 0
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
