const express = require('express');
const router = express.Router();

const db = require('../mysql/mysqlConnection');
const Result = require('../profile/searchUser');

const pageMove = {
    searchUser: (req, res) => {
        res.render('searchUser');
    }  
};



module.exports = pageMove;