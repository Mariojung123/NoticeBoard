const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./mysqlConnection');


const DBCP = {
  connection: async function (req, res, next) {
    try {
      // pool.getConnection()의 반환 값을 변수에 저장
      const { login_id, login_pw } = req.body;
      console.log(login_id, login_pw);

      const connection = await db.pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM userTable WHERE username = ? AND password = ?', [login_id, login_pw]);

      if (rows.length > 0) {
        res.send(`Hello, login_id: ${login_id}`);
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