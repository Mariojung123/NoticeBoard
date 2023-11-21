const session = require('express-session');
require('dotenv').config();

const sessionMiddleware = session({
  secret: process.env.SessionSecret,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
});

module.exports = sessionMiddleware;