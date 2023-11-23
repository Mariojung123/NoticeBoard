const express = require('express');
const router = express.Router();
const passport = require('passport');
const connect = require('../../../api/google/oauthFun');


router.use(passport.initialize());


router.use('/login', connect.Login);
router.use('/redirect', connect.Redirect);

module.exports = router;
