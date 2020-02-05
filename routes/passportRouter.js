const express        = require("express");
const passportRouter = express.Router();
const passport = require('../config/passport')

const User = require('../models/User')
const { signupView } = require('../controllers/index')


//Signup Route
passportRouter.get('/signup', signupView)