const express = require('express');
const router = express.Router();
const login = require('../../../../data/login/loginCheck');
const ctrl = require('../controler/home.ctrl');
const mysql = require('../../../../data/mysql/mysqlExample');

router.use('/user', mysql.connection);
router.use('/home', ctrl.output.home); //main 화면
router.use('/login', ctrl.output.login); //login 화면
router.use('/loginCheck', login.login_checking); //로그인 판별

module.exports = router;
