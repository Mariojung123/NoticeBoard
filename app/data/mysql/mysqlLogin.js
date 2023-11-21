const express = require('express');
const session = require('express-session');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./mysqlConnection');
require('dotenv').config();


const DBCP = {
  connection: function (req, res, next) { // next 파라미터를 추가해야 합니다.
    // pool.getConnection()의 반환 값을 변수에 저장
    const { login_id, login_pw } = req.body;
    db.pool.getConnection().then((connection) => {
      try {
        connection.query('SELECT * FROM userTable WHERE id = ? AND password = ?', [login_id, login_pw], (error, rows) => {
          if (error) {
            console.error(error);
            res.status(500).send('서버 오류');
            return;
          }

          if (rows.length > 0) {
            res.send('로그인 성공');
          } else {
            res.send('로그인 실패');
          }

          connection.release();
          next(); // next()를 이 위치에 올바르게 호출해야 합니다.
        });
      } catch (error) {
        console.error(error);
        res.status(500).send('서버 오류');
      }
    });
  }
};

module.exports = DBCP;
