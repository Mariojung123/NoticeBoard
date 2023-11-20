const express = require('express');
const router = express.Router();
const db = require('./mysqlConnection');

const mysql = {
  connection: function (req, res) {
    db.query('SELECT * FROM userTable', function (err, results, fields) {
      if (err) {
        console.error('MySQL 쿼리 오류:', err);
        res.status(500).json({ error: '데이터베이스 오류' });
        return;
      }
      res.json(results);
    });
  },
};

module.exports = mysql;
