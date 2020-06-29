const mongoose = require('mongoose');
const geocoder = require('../Utils/GeoCoder'); 
const Schema = mongoose.Schema;
// @desc game creation schema
let GameShema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for the game'],
    unique: [true, 'The name for the game entered exist'],
    maxlenght: [50, 'Name can not be more than 50 characters'],
  },
  address: {
    type: [String],
    required: [true, 'Game missing address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    quistions: {
      type: [String],
      reqiured: true,
      answers: {
        type: [String],
        reqiured: true,
      },
    },
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    CreatedAt: {
      type: Date,
      defaut: Date.now,
    },
  },
});

// @desc create an array of coodinates  
GameShema.pre('save', async function (next) {
  const lac = await geocoder.geocode(this.address);
  this.location = {
      type: 'Point',
      coordinates:[loc[0].lngitude, loc[0].latitude],
      formattedAddress: loc[0].formattedAddress,
      street: loc[0].street,
      city: loc[0].city,
      state: loc[0].state,
      zipcode: loc[0].zipcode,
      country: loc[0].country,
  }  
  // Stoping address from being saved in the database
  this.address = undefined;
  next();
});

module.exports = mongoose.model('games', GameShema);
