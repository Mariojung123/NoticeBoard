const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  signUp: (req, res) => {
    res.render('home/signUp');
  },
};

module.exports = {
  output,
};
