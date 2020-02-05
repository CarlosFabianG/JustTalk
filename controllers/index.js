const User = require('../models/User')


exports.signupView = (req, res) => {
  res.render('passport/signup')
}