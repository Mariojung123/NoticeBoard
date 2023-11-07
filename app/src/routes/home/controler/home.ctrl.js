const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  map: (req, res) => {
    //map.ejs로 가기 위한 변경사항
    res.render('home/map');
  },
  map_test: (req, res) => {
    res.render('home/map_test');
  },
};

module.exports = {
  output,
};
