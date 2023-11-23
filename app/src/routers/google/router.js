const express = require('express');
const router = express.Router();
const passport = require('passport');
const connect = require('../../../api/google/oauthFun');

const sessionApp = require('../session/expressSession');

router.use(passport.initialize());

router.use(sessionApp);

router.use('/login', connect.Login);
router.use('/redirect', connect.Redirect);

module.exports = router;
