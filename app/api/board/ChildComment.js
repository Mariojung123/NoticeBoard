const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const ChildComment = {
    freeBoard: async function (req, res) {
        let connection;
        try {
            const user = req.cookies.user.login_id;
            const {postId, comment_id, commentContent} = req.body;
            console.log(user);
            console.log(postId);
            console.log(comment_id);
            console.log(commentContent);
            

            connection = await db.pool.getConnection();

            const sql = 'INSERT INTO freeBoardChildComment (author, content, post_id, comment_id) VALUES (?, ?, ?, ?)';
            await connection.query(sql, [user, commentContent, postId, comment_id]);
            connection.release();

            res.redirect(`/board/free/${postId}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('tlqkf 오류임');
        }
    }
}

module.exports = ChildComment;