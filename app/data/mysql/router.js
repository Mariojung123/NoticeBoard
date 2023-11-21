const session = require('./session');
const express = require('express');
const router = express.Router();
const DBCP = require('./mysqlLogin');

router.use('/dbcp', DBCP.connection);

module.exports = router;
