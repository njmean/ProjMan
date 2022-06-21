## to Create Package.json
npm init -y
## install packages
npm i express express-graphql graphql mongoose cors colors

## Dev Dependancies
npm i -D nodemon dotenv

## create folders
/server - for server (schema etc)
/client - for client

## in /server create index.js

## For client

npx create-react-app client

## in client folders

npm i @apollo/client graphql react-router-dom react-icons


#######

Install backend dependencies
npm install
Install client dependencies
cd client
npm install
Add Mongo URI
If you're going to use MongoDB, create a database with Atlas, add it to the .env.example file and rename the file to .env

Run backend & frontend
npm run dev
cd client
npm start
API URL - http://localhost:5000
GraphiQL URL - http://localhost:5000/graphql
React App - http://localhost:3000

