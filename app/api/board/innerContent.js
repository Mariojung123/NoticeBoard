const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const InnerContent = {
    freeBoard: async function (req, res) {
        let connection;
        const postId = req.params.postId;
    
        try {
            const [post, fields] = await db.pool.query('SELECT * FROM freeBoard WHERE id = ?', [postId]);
    
            if (post.length === 0) {
                // 해당 ID의 게시글이 없는 경우 404 에러
                res.status(404).send('게시글을 찾을 수 없습니다.');
            } else {
                res.render('freeBoardContent', { post: post[0] });
            }
        } catch (error) {
            console.error('MySQL query error: ' + error.stack);
            res.status(500).send('게시글을 불러오는 중 오류가 발생했습니다.');
        }
    }
};

module.exports = InnerContent;