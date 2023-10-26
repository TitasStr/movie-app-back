# TypeScript React movie-app-back Readme

This is a full-stack application where the frontend is built with React using TypeScript, and the backend is built with Node.js using TypeScript.
Postgres is used as the database. In order to run the application, please follow the steps below.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js: https://nodejs.org/
- Postgres: https://www.postgresql.org/download/

## Database Setup

1. Update the database configuration in the server/db.ts file located in the server folder. Replace "user", "password" and "port" with your Postgres credentials.

2. Create the necessary tables by executing the SQL commands written in the database.sql file. You can use the `psql` command-line tool to do this

## Running the Server

1. Open your terminal and navigate to the server folder of the project.

2. Install the necessary Node.js dependencies by running: npm install

3. Build the server files by running: npm run build

4. Start the backend server by running: npm run start

The server should now be running at http://localhost:5000
