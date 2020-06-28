const mongoose = require('mongoose');
const geocoder = require('../Utils/GeoCoder');
const AsyncHandler = require('../Middleware/Async');
const Games = require('../Model/GameModel');

module.exports = {
  // @desc Get game within radius
  // @route Get /user/radius/:zipcode/:distance
  // @access Protected
  GameInRadius: AsyncHandler(async (req, res, next) => {
    const { zipcode, distance } = req.param;

    // Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // Calc radius using radians
    // Divide dist by radius of Earth
    // Earth Radiu = 3.963 mile / 6378 k
    const radius = distance / 6378;

    const game = await Games.find({
      location: { SqeoWithin: { $centerSphere: [[lng, lat], radius] } },
    });

    res.status(200).json({
      success: true,
      count: Game.length,
      data: Games,
    });
  }),
};
