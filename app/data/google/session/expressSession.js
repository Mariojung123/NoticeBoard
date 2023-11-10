const session = require('express-session');
const express = require('express');
require('dotenv').config();

// Express 애플리케이션과 세션 설정 가져오기
const app = express();
app.use(
  session({
    secret: process.env.SessionSecret, // env 수정(1번 피드)
    resave: false,
    saveUninitialized: true,
  })
);

module.exports = app;
