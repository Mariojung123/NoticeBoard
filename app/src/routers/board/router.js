const express = require('express');
const router = express.Router();

const Board = require('../../../api/board/Board.Ctrl');

router.use('/freeBoard', Board.directing.freeBoard);
router.use('/kknockBoard', Board.directing.kknockBoard);

router.use('/free_Writing', Board.Writing.free_Writing);
router.use('/kknock_Writing', Board.Writing.kknock_Writing);

module.exports = router;