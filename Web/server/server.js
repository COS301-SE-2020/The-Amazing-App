const express =  require('express');
const http =  require('http');
const port =  8080;
const app = express();
let file = require("fs");
let database;

app.use(express.static(__dirname+'/'));//gets the directory name and uses as root



app.get('/',(req,res) =>
{
    res.sendfile('../html/index.html')
});

app.get('/game_stats',(req,res) => {
});

app.get('/user_preference',(req,res) => {

});

app.get('/login',(req,res) => {

});

app.get('/register',(req,res)=>{

})

app.listen(port, () => console.log(`The Amazing App Server listing to ${port}!`));

