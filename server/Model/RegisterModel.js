const mongoose = require('mongoose');
const crypto = require('crypto');
const { date } = require('@hapi/joi');
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      'Please enter a valid email',
    ],
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, 'Please add passwod'],
    Select: false,
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: Date,
  image: {
    type: String,
  },
  id: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

//Encript password using bcriptjs
UserSchema.pre('save', async function (next) {
  if(!this.isModified('password')){
    next();
  }
  const salt = await Bcrypt.genSalt(10);
  this.password = await Bcrypt.hash(this.password, salt);
  this.id = undefined;
  next();
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.secrete, {
    expiresIn: process.env.JwtExpire,
  });
};

// Match user entered pasword to hashed pasword in database
UserSchema.methods.MatchPassword = async function (PlanePassword) {
  return await Bcrypt.compare(PlanePassword, this.password);
};

// Generate and hash password
UserSchema.methods.getResetPasswordToken = function () {
  //token generation
  const ResetToken = crypto.randomBytes(20).toString('hex');

  //hash token and set to resed pasword field
  this.ResetPasswordToken = crypto
    .createHash('sha256')
    .update(ResetToken)
    .digest('hex');

    // set expire 
    this.ResetPasswordExpire = Date.now() + 10*60*1000;

    return ResetToken;
};
module.exports = mongoose.model('users', UserSchema);
