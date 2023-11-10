const express = require('express');
const router = express.Router();

const signUp = require('../signUp/signUpCheck');

router.use('/Checking', signUp.signUpChecking);

module.exports = router;
