const app = require('express')()


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Amazing:amazing@cluster0-48kgz.mongodb.net/Admin_Data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err =>
{
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const router = require('./router')
const port = process.env.PORT || 8000
app.use('/',router)
app.listen(port, ()=>console.log(`Server listening on port ${port}`))
