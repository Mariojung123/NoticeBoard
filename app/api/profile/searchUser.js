const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const GetProfile = {
    SearchProfile: async function (req, res) {
        let connection;
        try {
            const searchName = req.query.searchName;
            console.log(searchName);

            if (!searchName) {
                // 검색어가 제공되지 않은 경우 처리
                return res.status(400).send('검색어를 입력하세요.');
            };
            connection = await db.pool.getConnection();

            const [rows, fields] = await db.pool.query('SELECT * FROM userTable WHERE username = ?', [searchName]);
        
            res.render('searchResult', { searchName, searchResults: rows });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('내부 서버 오류');
        } finally {
            if(connection) {
                connection.release();
            }
        }
    }
};

module.exports = GetProfile;