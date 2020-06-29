const mongoose = require('mongoose');

// @desc database connection

const DBconnection = async () => {
  const conn = await mongoose.connect(process.env.MongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Conected ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = DBconnection;
