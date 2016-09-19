var express = require('express');
var router = express.Router();

var users = {
  'use': 'my name is use'
}


router.all('/:username', function (req, res, next) {
  if (users[req.params.username]) {
    console.log(users[req.params.username]);
    res.send("hasdfa");
//    next();
  } else {
    next(new Error(req.params.username + 'does not exist.'));
  }
});
/* GET users listing. */
router.get('/:', function(req, res, next) {
  res.send('respond with a resource');
});


// /users/users/hehe
router.get('/users/:username', function(req, res) {
  res.send('user: ' + req.params.username);
});


module.exports = router;
