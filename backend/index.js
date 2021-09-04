const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require('mongoose')
const connectDb = require("./config/connect");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// load config
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors())

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDb();

const port = process.env.PORT || 8000;

app.use("/", require("./routes/index"));

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
