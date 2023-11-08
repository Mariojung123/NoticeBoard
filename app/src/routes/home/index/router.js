const express = require('express');
const router = express.Router();
const ctrl = require('../controler/home.ctrl');

router.get('/home', ctrl.output.home); //main 화면
router.get('/login', ctrl.output.login); //login 화면

module.exports = router;
