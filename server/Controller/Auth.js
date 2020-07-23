const ErrorResponse = require('../Utils/ErrorResponse');
const enviro = require('dotenv');
const SendEmial = require('../Utils/SendEmail');
const crypto = require('crypto');
enviro.config({ path: './Config/Config.env' });
const AsyncHandler = require('../Middleware/Async');
const User = require('../Model/RegisterModel');
const {
  registerValidation,
  LoginValidation,
} = require('../Middleware/Validation');

module.exports = {
  // @desc Login user
  // @route Post /api/auth/Login
  // @access Public

  Login: AsyncHandler(async (req, res, next) => {
    const { error } = await LoginValidation(req.body);
    if (error) return next(new ErrorResponse(error.details[0].message, 400));

    // check for the user
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select('+password');
    if (!user) return next(new ErrorResponse('Invalid credentials', 401));

    // check if password match
    const match = await user.MatchPassword(password);
    if (!match) {
      return next(ErrorResponse('Invalid credentials', 401));
    }
    SendTokenResponse(user, 200, res);
  }),

  // @desc Register new user
  // @route Post /api/auth/Register
  // @access Public

  Register: AsyncHandler(async (req, res, next) => {
    const { error } = await registerValidation(req.body);
    if (error) return next(new ErrorResponse(error.details[0].message, 400));

    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });

    SendTokenResponse(user, 200, res);
  }),

  // @desc Get current logged in user
  // @route Post /api/auth/me
  // @access Private

  GetMe: AsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    res.status(200).json({ success: true, data: user });
  }),

  // @desc Forgot password
  // @route Post /api/auth/forgotpassword
  // @access Public

  ForgotPassword: AsyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorResponse('Email does not exist', 404));
    }

    // Get reset token
    const ResetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // create reset url
    const ResetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/auth/ResetPassword/${ResetToken}`;
    const message = `Reset your pasword on the following: \n\n ${ResetUrl}`;

    try {
      await SendEmial({
        email: user.email,
        subject: 'Pasword reset',
        message,
      });
      res.status(200).json({ success: true, data: 'Email sent' });
    } catch (err) {
      console.log(err);
      user.ResetPasswordToken = undefined;
      user.ResetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return next(new ErrorResponse('Email could not be sent', 500));
    }
    res.status(200).json({ success: true, data: user });
  }),

  // @desc      Reset password
  // @route     PUT /api/auth/ResetPassword/:resettoken
  // @access    Public

  ResetPassword: AsyncHandler(async (req, res, next) => {
    // Get hashed token
    const ResetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.Resettoken)
      .digest('hex');

    const user = await User.findOne({
      ResetPasswordToken,
      ResetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse('Invalid token', 400));
    }

    // Set new password
    user.password = req.body.password;
    user.ResetPasswordToken = undefined;
    user.ResetPasswordExpire = undefined;
    await user.save();

    SendTokenResponse(user, 200, res);
  }),

  // @desc Update user details
  // @route PUT /api/auth/UpdateDetails
  // @access Private

  UpdateDetails: AsyncHandler(async (req, res, next) => {
    const FieldToUpdate = {
      username: req.body.username,
      email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.user._id, FieldToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: user });
  }),

  // @desc Change user password
  // @route PUT /api/auth/ChangePassword
  // @access Private

  ChangePassword: AsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id).select('+password');

    // Validate current pasword MatchPassword
    if (!(await user.MatchPassword(req.body.CurrentPassword))) {
      next(new ErrorResponse(`Password is incorrect`, 401));
      
    }

    user.password = req.body.NewPassword;
    await user.save();

    SendTokenResponse(user, 200, res);
  }),

  // @desc Update user email
  // @route PUT /api/auth/UpdateEmail
  // @access Private

  UpdateEmail: AsyncHandler(async (req, res, next) => {
    const FieldToUpdate = {
      email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.user._id, FieldToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: user });
  }),

  // @desc Update username
  // @route PUT /api/auth/UpdateUsername
  // @access Private

  UpdateUsername: AsyncHandler(async (req, res, next) => {
    console.log(req.body.username)
    const FieldToUpdate = {
      username: req.body.username,
    };

    const user = await User.findByIdAndUpdate(req.user._id, FieldToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: user });
  }),

  // @desc Get current logged in user
  // @route Post /api/auth/auth
  // @access Private

  LogOut: AsyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
  }),
};

// Get token from model, create cookie and send reposne
const SendTokenResponse = (user, StatusCode, res) => {
  // create to token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JwtCookieExpire * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  
  if ((process.env.NODE_ENV === 'production')) {
    options.secure = true;
  }
 
  res.status(StatusCode).cookie('token', token, options).json({
    success: true,
    token: token,
  });
};
