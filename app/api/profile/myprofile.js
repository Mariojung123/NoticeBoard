const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const GetProfile  = {
    myProfile: async function (req, res) {
        let connection;
        try {
            const user = req.cookies.user.login_id;

            if (!user) {
                return res.status(401).send('Unauthorized');
            }

            connection = await db.pool.getConnection();

            console.log(user)
            
            const [infos, fields] = await connection.query('SELECT * FROM userTable WHERE username = ?', [user]);

            connection.release();

            infos.forEach(row => { //출력문
                console.log(row);
              });



            if (infos.length === 0) {
                return res.status(404).send('사용자를 찾을 수 없음');
            }

            const userInfo = infos[0];

            res.render('profile', { userInfo });
        } catch (error) {
            console.error(error);
            res.status(500).send('내부 서버 오류');
        }
    }
}

module.exports = GetProfile;