const express = require('express');
const session = require('express-session');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./mysqlConnection');
require('dotenv').config();

router.use(session({
  secret: process.env.SessionSecret, // 임의의 비밀 키, 실제 프로덕션에서는 더 안전한 방식을 사용해야 합니다.
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false } // HTTPS를 사용하는 경우 true로 설정해야 합니다.
}));

const DBCP = {
  connection: function (req, res) {
    // pool.getConnection()의 반환 값을 변수에 저장
    const { login_id, login_pw } = req.body;
    db.pool.getConnection().then((connection) => {
      try {
        const [rows] = connection.query('SELECT * FROM userTable WHERE id = ? AND password = ?', [login_id, login_pw]);

      if (rows.length > 0) {
        res.send('로그인 성공');
      } else {
        res.send('로그인 실패');
      }

      connection.release();
      next();
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  }
};

module.exports = DBCP;