const db = require('../mysql/mysqlConnection'); // MySQL 연결 모듈

const signUp = {
  signUpChecking: async function (req, res) {
    let connection; // connection 변수를 선언

    try {
      connection = await db.pool.getConnection();

      const { username, password } = req.body;
      const sql = 'INSERT INTO userTable (username, password) VALUES (?, ?)';
      const [result] = await connection.query(sql, [username, password]);
      res.redirect('/login');
    } catch (error) {
      console.error('MySQL query error: ' + error.stack);
      res.status(500).send('Error occurred.');
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },
};

module.exports = signUp;
