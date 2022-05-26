const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
//this is the url required to authenticate into the database. In this case, im using a local DB without any authentication.
//connecting to the db using mongoose

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;