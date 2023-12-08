const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');

const InnerContent = {
    freeBoard: async function (req, res) {
        let connection;
        const postId = req.params.postId;
    
        try {
            console.log(postId);
            const [post, fields] = await db.pool.query('SELECT * FROM freeBoard WHERE id = ?', [postId]);
            const [comments, commentFields] = await db.pool.query('SELECT * FROM freeBoardComment WHERE post_id = ?', [postId]);
            const [ChildComments] = await db.pool.query('SELECT * FROM freeBoardChildComment WHERE post_id = ?', [postId]);
          
            if (post.length === 0) {
              // 해당 ID의 게시글이 없는 경우 404 에러
              res.status(404).send('게시글을 찾을 수 없습니다.');
            } else {
              // 조회수 증가
              await db.pool.query('UPDATE freeBoard SET views = views + 1 WHERE id = ?', [postId]);
          
              // 게시글 및 댓글 정보를 렌더링 데이터 넘기기
              res.render('freeBoardContent', { post: post[0], comments ,ChildComments, postId});
            }
          } catch (error) {
            console.error('MySQL query error: ' + error.stack);
            res.status(500).send('게시글을 불러오는 중 오류가 발생했습니다.');
          }
    },
    kknockBoard: async function (req, res) {
        let connection;
        const postId = req.params.postId;
    
        try {
            const [post, fields] = await db.pool.query('SELECT * FROM kknockBoard WHERE id = ?', [postId]);
            const [comments, commentFields] = await db.pool.query('SELECT * FROM kknockBoardComment WHERE post_id = ?', [postId]);
    
            if (post.length === 0) {
                // 해당 ID의 게시글이 없는 경우 404 에러
                res.status(404).send('게시글을 찾을 수 없습니다.');
            } else {
                // 조회수 증가
                await db.pool.query('UPDATE kknockBoard SET views = views + 1 WHERE id = ?', [postId]);

                // 게시글 및 댓글 정보를 렌더링
                res.render('kknockBoardContent', { post: post[0], comments });
            }
        } catch (error) {
            console.error('MySQL query error: ' + error.stack);
            res.status(500).send('게시글을 불러오는 중 오류가 발생했습니다.');
        }
    }

};

module.exports = InnerContent;