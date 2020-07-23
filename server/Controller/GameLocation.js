const ErrorResponse = require('../Utils/ErrorResponse');
const enviro = require('dotenv');
enviro.config({ path: './Config/Config.env' });
const AsyncHandler = require('../Middleware/Async');
const Game = require('../Model/GameModel');


module.exports = {
  
  // @desc Create a new game
  // @route '/api/game/GameDetails' 
  // @access Private

  GameCreation: AsyncHandler(async (req, res, next) => {
    const game = await Game.create(req.body);
    res.status(200).json({success:true,game:game});
  }),

  // @desc Create a new game
  // @route '/api/game/GetGameByName' 
  // @access Private

  RetrieveGameByName: AsyncHandler(async (req, res, next) => {
    const {name} = req.body;
    const game = await Game.find({name:name});
    res.status(200).json({success:true,game:game});
  }),

  // @desc Create a new game
  // @route '/api/game/GetGameById' 
  // @access Private
  RetrieveGameById: AsyncHandler(async (req, res, next) => {
    const {user_id} = req.body;
    const game = await Game.find({user_id:user_id});
    res.status(200).json({success:true,game:game});
  })
};
