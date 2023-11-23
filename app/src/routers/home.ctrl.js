const output = {
  home: (req, res) => {
    res.render('index');
  },
  login: (req, res) => {
    res.render('login');
  },
  signUp: (req, res) => {
    res.render('signUp');
  },
  main: (req, res) => {
    const user = req.cookies.user || null;

    res.render('main', { user });
  },
  logout: (req, res) => {
    // 로그아웃 시 쿠키 제거
    res.clearCookie('user');
    res.redirect('home');
  },
  profile: (req, res) => {
    res.render('profile');
  }
};

module.exports = {
  output,
};
