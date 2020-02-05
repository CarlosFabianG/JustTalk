const passport = require('passport')
const User = require('../models/User')


passport.use(User.createStrategy())

passport.serializerUser(User.serializerUser())
passport.deserializeUser(User.deserializeUser)



module.exports = passport;