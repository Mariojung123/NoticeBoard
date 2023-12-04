const express = require('express');
const router = express.Router();

const Content = require('../../../../api/board/innerContent');

router.use('/:postId',Content.freeBoard);


module.exports = router;