const express = require('express')
const router = express.Router()
const user = require('../Model/UserModel')

router.post('/login',(req,res)=>{
    const feeback = user.find({username: req.body.username})
    res.status(200).send({success:{status: 200, message: "User Logged In!"}})
})

router.post('/register',(req,res)=>{
    const admin = new user(req.body)
    const feedback = admin.save()
    res.status(200).send({success:{status: 200, message: "User Registered!"}})
})

router.post('/update/preference',(req,res)=>{
 
})

router.post('/profile/picture',(req,res)=>{

})

router.post('/question_answer',(req,res)=>{

})

router.post('/riddle',(req,res)=>{

})

router.post('/list',(req,res)=>{

})

module.exports = router