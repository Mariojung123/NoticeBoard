const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const writing = {
    freeWriting: async function (req, res) {
        let connection;
        try {
            connection = await db.pool.getConnection();

            var fileExist = 0;
            const author = req.cookies.user.login_id;
            const {title, content, file} = req.body;
            if (file) {
                fileExist = 1;
            }

            console.log(author);
            console.log(title);
            console.log(content);
            console.log(file);
            console.log(fileExist);

            const sql = 'INSERT INTO freeBoard (title, content, author, fileExist) VALUES (?, ?, ?, ?)';
            const [result] = await connection.query(sql, [title, content, author, fileExist]);
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
    kknockWriting: async function (req, res) {
        let connection;
        try {
            connection = await db.pool.getConnection();

            var fileExist = 0;
            const author = req.cookies.user.login_id;
            const {title, content, file} = req.body;
            if (file) {
                fileExist = 1;
            }

            console.log(author);
            console.log(title);
            console.log(content);
            console.log(file);
            console.log(fileExist);

            const sql = 'INSERT INTO kknockBoard (title, content, author, fileExist) VALUES (?, ?, ?, ?)';
            const [result] = await connection.query(sql, [title, content, author, fileExist]);
            res.redirect('/Board/kknockBoard');
        } catch (error) {
            console.error('MySQL query error: ' + error.stack);
            res.status(500).send('Error occurred.');
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }
};

module.exports = writing;