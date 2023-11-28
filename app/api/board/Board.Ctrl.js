const express = require('express');
const router = express.Router();

const Board = {
    freeBoard: (req, res) => {
        res.render('freeBoard');
    }
}

module.exports = Board;