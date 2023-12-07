const express = require('express');
const router = express.Router();

const Content = require('../../../../api/board/innerContent');
const Comment = require('../../../../api/board/Comment');



router.use('/comment/:postId', Comment.freeBoardComment);
router.use('/:postId', Content.freeBoard);


module.exports = router;



