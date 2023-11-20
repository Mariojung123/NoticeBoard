const express = require('express');
const router = express.Router();

const DBCP = require('../mysql/mysqlPool');

router.use('/dbcp', DBCP.connection);

module.exports = router;