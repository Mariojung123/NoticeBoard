const output = {
  home: (req, res) => {
    res.render('index');
  },
  login: (req, res) => {
    res.render('login');
  },
  signUp: (req, res) => {
    const info = {};
    res.render('signUp', {info});
  },
  main: (req, recs) => {
    const user = req.cookies.user || null;

    res.render('main', { user });
  },
  logout: (req, res) => {
    // 로그아웃 시 쿠키 제거
    res.clearCookie('user');
    res.redirect('home');
  },
};

module.exports = {
  output,
};
