const express = require('express');
const router = express.Router();

const mysql = require('../mysql/mysqlExample');

router.use('/user', mysql.connection);
