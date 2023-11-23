const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');



const mysqlRouter = require('./mysql/router');
const oauthRouter = require('./google/router');
const signUpRouter = require('./signUp/router');
const profileRouter = require('./profile/router');

router.use('/home', ctrl.output.home); //main 화면
router.use('/login', ctrl.output.login); //login 화면
router.use('/signUp', ctrl.output.signUp); //회원가입 화면
router.use('/main', ctrl.output.main); //main화면
router.use('/logout', ctrl.output.logout) //로그아웃 후 /home 리다이렉트




router.use('/mysql', mysqlRouter)
router.use('/sign', signUpRouter); //여기 수정 해야함
router.use('/oauth', oauthRouter);
router.use('/profile', profileRouter);

module.exports = router;r