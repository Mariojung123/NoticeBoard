const express = require('express');
const router = express.Router();

const Board = require('../../../api/board/Board.Ctrl');

router.use('/freeBoard', Board.freeBoard);

module.exports = router;