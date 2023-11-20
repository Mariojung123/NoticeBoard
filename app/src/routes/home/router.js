const express = require('express');
const router = express.Router();
const login = require('../../../data/login/loginCheck');
const ctrl = require('../../routes/home/controler/home.ctrl');


const mysql = require('../../../data/mysql/router');

const oauthRouter = require('../../../data/google/oauth/router');
const signUpRouter = require('../../../data/signUp/router');

router.use('/home', ctrl.output.home); //main 화면
router.use('/login', ctrl.output.login); //login 화면
router.use('/signUp', ctrl.output.signUp); //회원가입 화면

router.use('/loginCheck', login.login_checking); //로그인 판별
router.use('/mysql',mysql)

router.use('/sign', signUpRouter); //여기 수정 해야함
router.use('/oauth', oauthRouter);

module.exports = router;
