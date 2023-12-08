const express = require('express');
const router = express.Router();

const Content = require('../../../../api/board/innerContent');
const Comment = require('../../../../api/board/Comment');
const ChildComment = require('../../../../api/board/ChildComment');


router.use('/ChildComment', ChildComment.freeBoard);
router.use('/comment/:postId', Comment.freeBoardComment);
router.use('/:postId', Content.freeBoard);


module.exports = router;



