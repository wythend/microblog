
exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.hello = function(req, res) {
  res.send('This time is ' + new Date().toString());
};


