const express = require('express')
const router = express.Router()
const ad = require('../Model/AdminModel')

router.post('/login',(req,res)=>{
    const feeback = ad.find({username: req.body.username})
    res.status(200).send({success:{status: 200, message: "Admin Logged In!"}})
    //res.status(401).send({error:{status: 401, message: "Unauthorized!"}})
})
//so heres the end point 
router.post('/register',(req,res)=>{
    
    const admin = new ad(req.body)
    const feedback = admin.save()
    res.status(200).send({success:{status: 200, message: "Admin Registered!"}})
})

router.post('/update/preference',(req,res)=>{
 
})

router.post('/profile/picture',(req,res)=>{

})

router.post('/question_answer',(req,res)=>{

})

router.post('/riddle',(req,res)=>{

})

router.get('/game/list',(req,res)=>{

})



module.exports = router