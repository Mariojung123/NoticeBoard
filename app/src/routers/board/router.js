const express = require('express');
const router = express.Router();

const Board = require('../../../api/board/Board.Ctrl');
const writing = require('../../../api/board/writing');
const getText = require('../../../api/board/getText');

const freeContentRouter = require('./freeBoardContent/router');
const kknockContentRouter = require('./kknockBoardContent/router');

router.use('/freeBoard', getText.freeBoardText);
router.use('/kknockBoard', getText.kknockBoardText);

router.use('/free_Writing', Board.Writing.free_Writing);
router.use('/kknock_Writing', Board.Writing.kknock_Writing);

router.use('/free_Writing_Ok', writing.freeWriting);
router.use('/kknock_Writing_Ok', writing.kknockWriting);

router.use('/free', freeContentRouter);
router.use('/kknock', kknockContentRouter);

module.exports = router;