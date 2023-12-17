const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./mysqlConnection');
const sqlCheck = require('./InjectionCheck');

const DBCP = {
  connection: async function (req, res, next) {
    try {
      const { login_id, login_pw } = req.body;

      // SQL 인젝션 체크
      if (!sqlCheck.idSpecialCharactersCheck(login_id)) {
        console.log("SQL 인젝션 감지: ", login_id, login_pw);
        return res.redirect('/login');
      }

      console.log("로그인 시도: ", login_id, login_pw);

      // 비밀번호 해싱 및 안전한 쿼리 사용을 고려하여 수정해야 함

      const connection = await db.pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM userTable WHERE username = ? AND password = ?', [login_id, login_pw]);

      if (rows.length > 0) {
        // 로그인 성공 시 쿠키에 사용자 정보 저장
        res.cookie('user', { login_id });
        res.redirect('/main');
      } else {
        res.send(false);
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
