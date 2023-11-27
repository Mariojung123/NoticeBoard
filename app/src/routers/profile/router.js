const express = require('express');
const router = express.Router();
const userCtrl = require('../../../api/profile/User.Ctrl');


const Profile = require('../../../api/profile/myprofile');
const Result = require('../../../api/profile/searchUser');

router.use('/myinfo', Profile.myProfile);
router.use('/searchResult', Result.SearchProfile);
router.use('/searchUser', userCtrl.searchUser);


module.exports = router;