const express =  require('express');
const http =  require('http');
const port =  8080;
const app = express();

app.use(express.static(__dirname+'/'));



app.get('/',(req,res) =>
{
    res.sendfile('../view/public/index.html')
});

app.get('/SignUp',(req,res) => {
    
});

app.get('/LogIn',(req,res) => {
    
});

app.get('/AddUser',(req,res) => {

});

app.get('/UpdatePreferenc',(req,res) => {

});

app.get('/search',(req,res)=>{
  
})

app.listen(port, () => console.log(`The Amazing App Server listening on ${port}!`));



