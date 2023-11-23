const express = require('express');
const router = express.Router();

const DBCP = require('../../../api/mysql/mysqlLogin');

router.use('/dbcp', DBCP.connection);

module.exports = router;