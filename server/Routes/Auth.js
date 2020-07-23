const express = require('express')
const router = express.Router()
const Auth = require('../Controller/Auth');
const verify = require('../Middleware/Verifytoken')



router.post('/Register', Auth.Register);
router.post('/Login', Auth.Login);
router.get('/LogeOut', Auth.LogOut);
router.get('/me',verify.Protect, Auth.GetMe);
router.put('/UpdateDetails',verify.Protect, Auth.UpdateDetails);
router.put('/UpdateEmail',verify.Protect, Auth.UpdateEmail);
router.put('/UpdateUsername',verify.Protect, Auth.UpdateUsername);
router.put('/ChangePassword',verify.Protect, Auth.ChangePassword);
router.post('/forgotPassword', Auth.ForgotPassword);
router.put('/ResetPassword/:Resettoken',Auth.ResetPassword)


module.exports = router;