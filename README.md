<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
Movie-App-Back is developed using NestJS. This backend uses PostgreSQL for database management, handling user authentication, and movie data processing as part of the movie-app.

## Database setup
### Configuration
Adjust the .env file in the project's root to set up your database connection. Ensure your PostgreSQL credentials are correctly entered for a successful connection.
### Creating Tables
Run the SQL commands in the /database.sql file to create the required users and movies tables. These tables are essential for the backend's functionality.
## Installation
Ensure Node.js is installed on your system, then install the project dependencies with:
```bash
$ npm install
```

## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
