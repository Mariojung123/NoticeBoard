const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const writing = {
    freeWriting: async function (req, res) {
        let connection;
        try {
            connection = await db.pool.getConnection();

            const author = req.cookies.user.login_id;
            const {title, content} = req.body;

            console.log(author);
            console.log(title);
            console.log(content);

            const sql = 'INSERT INTO freeBoard (title, content, author) VALUES (?, ?, ?)';
            const [result] = await connection.query(sql, [title, content, author]);
            res.redirect('/Board/freeBoard');
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

module.exports = writing;