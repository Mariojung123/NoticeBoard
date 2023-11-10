const db = require('../mysql/mysqlConnection'); // MySQL 연결 모듈

const signUp = {
  signUpChecking: function (req, res) {
    const { login_id, login_pw, user_name } = req.body;
    const sql =
      'INSERT INTO user_login (login_id, login_pw, created, user_name) VALUES (login_id, login_pw, NOW(), user_name)';

    db.query(sql, [login_id, login_pw, user_name], (err, result) => {
      if (err) {
        console.error('MySQL query error: ' + err.stack);
        res.status(500).send('Error occurred.');
      } else {
        res.send('Signup successful!');
      }
    });
  },
};

module.exports = signUp;
