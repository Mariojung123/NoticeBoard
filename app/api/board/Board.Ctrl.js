const express = require('express');
const router = express.Router();

const Board = {
    freeBoard: (req, res) => {
        res.render('freeBoard');
    },
    kknockBoard: (req, res) => {
        res.render('kknockBoard');
    }
}

module.exports = Board;