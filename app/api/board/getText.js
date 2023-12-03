const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const GetText = {
    freeBoardText: async function (req, res) {
        let connection;
        try {
            connection = await db.pool.getConnection();
            const [posts, fields] = await connection.query('SELECT * FROM freeBoard');
            connection.release();
            posts.forEach(row => {
                console.log(row);
            });
            
            res.render('freeBoard', {posts});
        } catch (error) {
            console.log(error);
        }
    },
    kknockBoardText: async function (req, res) {
        let connection;
        try {
            connection = await db.pool.getConnection();
            const [posts, fields] = await connection.query('SELECT * FROM kknockBoard');
            connection.release();
            posts.forEach(row => {
                console.log(row);
            });
            
            res.render('kknockBoard', {posts});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GetText;