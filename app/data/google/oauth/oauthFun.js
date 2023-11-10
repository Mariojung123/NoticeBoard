const express = require('express');
const Login = require('../oauth');
const passport = require('passport');

const connect = {
  Login: function (req, res) {
    Login.Login(req, res, passport.sess_load);
  },
  Redirect: function (req, res) {
    Login.Redirect(req, res, passport.sess_load, passport.sess_down);
  },
};

module.exports = connect;
