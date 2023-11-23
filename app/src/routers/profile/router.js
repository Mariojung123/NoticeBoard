const express = require('express');
const router = express.Router();
const ctrl = require('../home.ctrl');

router.use('/myinfo', ctrl.output.profile);


module.exports = router;