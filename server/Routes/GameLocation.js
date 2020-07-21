const express = require('express')
const router = express.Router()
const Game = require('../Controller/GameLocation');
const verify = require('../Middleware/Verifytoken')

router.post('/GameDetails',verify.Protect,Game.GameCreation);
router.post('/GetGameById',verify.Protect,Game.RetrieveGameById);
router.post('/GetGameByName',verify.Protect,Game.RetrieveGameByName);

module.exports = router;