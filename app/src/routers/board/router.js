const express = require('express');
const router = express.Router();

const Board = require('../../../api/board/Board.Ctrl');

router.use('/freeBoard', Board.freeBoard);
router.use('/kknockBoard', Board.kknockBoard);

module.exports = router;