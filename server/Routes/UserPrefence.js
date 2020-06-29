const express = require('express')
const router = express.Router()
const verify = require('../Middleware/Verifytoken')
const Pref = require('../Controller/UserPrefence')

router.put('/:id/photo',verify.Protect, Pref.ProfilePicture);



module.exports = router