const axios = require('axios');
require('dotenv').config();

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo';

const googleLoogin = {
  Login: function (req, res) {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${process.env.CLIENT_ID}`;
    url += `&redirect_uri=${process.env.CLIENT_REDIRECT_URL}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    res.redirect(url);
  },

  Redirect: async function (req, res) {
    const { code } = req.query;

    const resp = await axios.post(GOOGLE_TOKEN_URL, {
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirectUri: process.env.CLIENT_REDIRECT_URL,
      grant_type: 'authorization_code',
    });
    console.log(resp.data);

    const resp2 = await axios.get(GOOGLE_USERINFO_URL, {
      headers: {
        Authorization: `Bearer ${resp.data.access_token}`,
      },
    });
    
    res.json(resp2.data);
  },
};

module.exports = googleLoogin;
