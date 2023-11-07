const express = require('express');
const router = express.Router();
const ctrl = require('../controler/home.ctrl');

router.get('/home', ctrl.output.home);

module.exports = router;
