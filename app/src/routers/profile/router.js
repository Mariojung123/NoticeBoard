const express = require('express');
const router = express.Router();
const ctrl = require('../home.ctrl');
const Profile = require('../../../api/profile/myprofile');

router.use('/myinfo', Profile.myProfile);


module.exports = router;