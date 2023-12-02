const express = require('express');
const router = express.Router();

const directing = {
    freeBoard: (req, res) => {
        res.render('freeBoard');
    },
    kknockBoard: (req, res) => {
        res.render('kknockBoard');
    }
}
const Writing = {
    free_Writing: (req, res) => {
        res.render('free_Writing');
    },
    kknock_Writing: (req, res) => {
        res.render('kknock_Writing');
    }
}

module.exports = {directing, Writing};