const jwt = require('jsonwebtoken');
const AsyncHandler = require('./Async');
const enviro = require('dotenv').config();
const User = require('../Model/RegisterModel');
const ErrorResponse = require('../Utils/ErrorResponse');

module.exports = {
  Protect: AsyncHandler(async (req, res, next) => {
    let token ;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }
    //Check if token exist
    console.log(!token)
    if (!token)
      return next(new ErrorResponse('Not authorized to access this route', 401));

    try {
      //Verify token
      const verified = jwt.verify(token, process.env.secrete);
      console.log(verified);

      req.user = await User.findById(verified.id);

      next();
    } catch (err) {
      return next(new ErrorResponse('Not authorized to access this route', 401));
    }
  }),
};
