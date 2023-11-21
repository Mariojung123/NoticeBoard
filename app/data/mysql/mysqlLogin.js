const DBCP = {
  connection: async function (req, res, next) {
    try {
      // pool.getConnection()의 반환 값을 변수에 저장
      const { login_id, login_pw } = req.body;
      console.log(login_id, login_pw);

      const connection = await db.pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM userTable WHERE username = ? AND password = ?', [login_id, login_pw]);

      if (rows.length > 0) {
        // req.session.user = { login_id, login_pw };
        next(); // next()를 res.send 이후에 호출
      } else {
        res.send('로그인 실패');
      }

      connection.release();
    } catch (error) {
      console.error(error);
      res.status(500).send('서버 오류');
    }
  },
  logout: function (req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('서버 오류');
      } else {
        res.send('로그아웃 성공');
      }
    });
  }
};


module.exports = DBCP;