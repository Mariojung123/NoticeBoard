const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const Comment = {
    freeBoardComment: async function (req, res) {
        console.log("HI");
        let connection;
        try {
            const user = req.cookies.user.login_id;
            const postId = req.params.postId;
            console.log(user);
            console.log(postId);
            const { commentAuthor, commentContent } = req.body;

            connection = await db.pool.getConnection();

            const sql = 'INSERT INTO freeBoardComment (post_id, author, content) VALUES (?, ?, ?)';
            await connection.query(sql, [postId, user, commentContent]);
            connection.release();

            res.redirect(`/board/free/${postId}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('내부 서버 오류');
          }
    },
    kknockBoardComment: async function (req, res) {
        console.log("HI");
        let connection;
        try {
            const user = req.cookies.user.login_id;
            const postId = req.params.postId;
            console.log(user);
            console.log(postId);
            const { commentAuthor, commentContent } = req.body;

            connection = await db.pool.getConnection();

            const sql = 'INSERT INTO kknockBoardComment (post_id, author, content) VALUES (?, ?, ?)';
            await connection.query(sql, [postId, user, commentContent]);
            connection.release();

            res.redirect(`/board/kknock/${postId}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('내부 서버 오류');
          }
    }
}

module.exports = Comment;