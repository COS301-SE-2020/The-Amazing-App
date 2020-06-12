const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose')
const enviro = require('dotenv').config()

const uri = "mongodb+srv://"+process.env.USER+":"+process.env.PASS+"@cluster0-48kgz.mongodb.net/"+process.env.DB+"?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected to Database"))
    .catch(err=>console.log(err))

const admin = require('./Routes/AdminRoutes')
const user = require('./Routes/UserRoutes')
app.use('/admin',admin)
app.use('/user',user)
app.all('/',(req,res)=>{
    res.status(404).send({error:{status: 404, message: "Not found"}})
})

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log(`Server listening on port ${port}`))
