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
  main: (req, res) => {
    const user = req.cookies.user || null;

    res.render('home/main', { user });
  },
  logout: (req, res) => {
    // 로그아웃 시 쿠키 제거
    res.clearCookie('user');
    res.redirect('/home');
  },
};

module.exports = {
  output,
};
