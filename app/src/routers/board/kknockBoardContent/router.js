const express = require('express');
const router = express.Router();

const Content = require('../../../../api/board/innerContent');
const Comment = require('../../../../api/board/Comment');

router.use('/comment/:postId', Comment.kknockBoardComment);
router.use('/:postId',Content.kknockBoard);


module.exports = router;