const express = require('express');
const session = require('express-session');
require('dotenv').config();

const app = express();

// 세션 설정
const sess = {
  session: function (req, res) {
    console.log('helloworld!!!');
    app.use(
      session({
        secret: process.env.SessionSecret,
        resave: false,
        saveUninitialized: true,
      })
    );
    console.log('byeworld!!!');
  },

  session_load: function (req, res) {
    if (req.isAuthenticated()) {
      // 사용자가 로그인한 경우
      const user = req.user; // 현재 로그인한 사용자 정보
      res.send(`Welcome, ${user.displayName}!`);
      console.log('sessionOk');
    } else {
      // 사용자가 로그인하지 않은 경우
      res.redirect('/');
    }
  },
};

module.exports = sess;
