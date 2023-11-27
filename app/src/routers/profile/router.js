const express = require('express');
const router = express.Router();
const userCtrl = require('../../../api/profile/searchUser');


const Profile = require('../../../api/profile/myprofile');

router.use('/myinfo', Profile.myProfile);
router.use('/searchUser', userCtrl.searchUser);


module.exports = router;