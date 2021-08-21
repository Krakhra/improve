const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db');

// load config
dotenv.config({path:'./config/config.env'});

connectDb()

const app = express();

app.use(morgan('dev'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in on ${PORT}`))

