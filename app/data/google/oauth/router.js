const express = require('express');
const Login = require('../oauth');
const router = express.Router();
const passport = require('passport');

const sessionApp = require('../session/expressSession');

router.use(passport.initialize());

router.use(sessionApp);

router.use('/login', (req, res) => {
  Login.Login(req, res, passport.sess_load);
});

router.use('/redirect', (req, res) => {
  Login.Redirect(req, res, passport.sess_load, passport.sess_down);
});

module.exports = router;
