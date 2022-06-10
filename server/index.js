// Create Express Server
const express = require('express');
// Bring in Colors 
const colors = require('colors');
const cors = require('cors');
// environment variables
require('dotenv').config();
// GraphQl set up
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// Database connection
const connectDB = require('./config/db');
// Get Port and set up server
const port = process.env.PORT || 5000;
const app = express();

// connect to database

connectDB();

app.use(cors());

app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`Server on port: ${port}`));
