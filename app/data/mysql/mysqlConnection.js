require('dotenv').config();

const mysql = require('mysql');
const db = mysql.createConnection({
  //아래 코드가 기존 코드이고 이거는 잠깐 실험해볼라고 적어놓은 코드임
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL에 성공적으로 연결되었습니다.');
});

module.exports = db;
