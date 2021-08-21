const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/db");
const passport = require("passport");
const session = require("express-session");

// load config
dotenv.config({ path: "./config/config.env" });

// passport
require("./config/passport")(passport);

// sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

connectDb();

const app = express();

app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in on ${PORT}`));
