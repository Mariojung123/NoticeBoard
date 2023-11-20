const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./mysqlConnection');


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

      } catch (error) {
        console.error(error);
        res.status(500).send('서버 오류');
      } finally {
        // 예외 발생 여부와 관계없이 항상 실행되는 블록
        connection.release();
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('서버 오류');
    });
  }
};





module.exports = DBCP;
